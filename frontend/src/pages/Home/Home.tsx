import { Col, Layout, message, Row } from "antd";
import { isNil } from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../../api/users";
import { getWorklogsDispatch } from "../../dispatchers/worklogs";
import { User } from "../../models/User";
import { RootState } from "../../reducer";
import { getDateSpan } from "../../utils/date";
import { useQuery } from "../../utils/hooks";
import WorklogCalendar from "./WorklogCalendar/WorklogCalendar";

import "./Home.css";
import DetailsSider from "./DetailsSider/DetailsSider";

const getInitialDate = ({
  month,
  year,
  day
}: {
  month: string | number | null;
  year: string | number | null;
  day: string | number | null;
}) => {
  if (!isNil(month) && !isNil(year) && !isNil(day)) {
    return moment([year, month, day]);
  }
  return moment();
};

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const fetchWorklogs = (from: Date, to: Date, user: User) => {
    getWorklogsDispatch({ from, to, user: user })(dispatch);
  };

  const isFetchingWorklogs = useSelector(
    (state: RootState) => state.worklogs.isFetchingWorklogs
  );

  const appUser = useSelector(
    (state: RootState) => state.appState.user
  ) as User;

  const url = useSelector((state: RootState) => state.appState.url) || "";

  const userTimezone = useSelector((state: RootState) => {
    const user = state.appState.user;
    return user && user.timeZone;
  }) as string;

  const errorWhileFetchingWorklogs = useSelector(
    (state: RootState) => state.worklogs.error
  );
  const history = useHistory();
  const query = useQuery();

  const { worklogs, month, year, day, user } = useSelector(
    (state: RootState) => state.worklogs
  );

  const [selectedDate, setSelectedDate] = useState(
    getInitialDate({ month, year, day })
  );

  const setQueryParams = (keys: { [key: string]: string | number }) => {
    const urlParams = new URLSearchParams();
    Object.entries(keys).forEach(([key, value]) =>
      urlParams.set(key, value.toString())
    );
    history.push(`?${urlParams.toString()}`);
  };

  useEffect(() => {
    if (errorWhileFetchingWorklogs) {
      message.error("Could not fetch worklogs. Please try again.");
    }
  });

  useEffect(() => {
    const { from, to } = getDateSpan(
      getInitialDate({
        year: query.get("year"),
        month: query.get("month"),
        day: query.get("day")
      })
    );
    const accountId = query.get("user");
    if (accountId) {
      getUser(accountId as string)
        .then(({ data }) => {
          fetchWorklogs(from, to, data);
        })
        .catch(() => {
          message.error(`Could not fetch user with accountID: ${accountId}`);
        });
    } else {
      fetchWorklogs(from, to, appUser);
    }
  }, []);

  const onViewChanged = (date: moment.Moment, user: User) => {
    setSelectedDate(date);
    const changedYear = date.year();
    const changedMonth = date.month();
    const changedDay = date.date();
    setQueryParams({
      year: changedYear,
      month: changedMonth,
      day: changedDay,
      user: user.accountId
    });

    if (changedMonth !== month || changedYear !== year) {
      const { from, to } = getDateSpan(moment([changedYear, changedMonth]));

      fetchWorklogs(from, to, user);
    }
  };

  const onRefresh = () => {};

  const initialized = () => !isNil(user) && !isNil(month) && !isNil(year);

  return (
    <div className="home__container">
      {initialized() ? (
        <Row gutter={24}>
          <Col span={24} className="home__content">
            <WorklogCalendar
              url={url}
              userWorklogs={user as User}
              isFetchingWorklogs={isFetchingWorklogs}
              selectedDate={selectedDate}
              onViewChanged={onViewChanged}
              onRefresh={onRefresh}
              worklogs={worklogs}
              userTimezone={userTimezone}
            />
          </Col>
          {/*<Col span={6} className="home__sider">*/}
          {/*  <DetailsSider />*/}
          {/*</Col>*/}
        </Row>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
