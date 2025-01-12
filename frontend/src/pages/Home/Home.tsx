import { message } from "antd";
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
import AddWorklogFormModal from "./AddWorklogFormModal/AddWorklogFormModal";
import DetailsSider from "./DetailsSider/DetailsSider";
import "./Home.css";
import { getWorklogForDate } from "./utils/getWorklogForDate";
import { groupWorklogsByDates } from "./utils/groupWorklogsByDates";
import { sumTotalLoggedTime } from "./utils/sumTotalLoggedTime";
import WorklogCalendar from "./WorklogCalendar/WorklogCalendar";

const getInitialDate = ({
  month,
  year,
  day,
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

  const history = useHistory();
  const query = useQuery();

  const isFetchingWorklogs = useSelector((state: RootState) => state.worklogs.isFetchingWorklogs);

  const appUser = useSelector((state: RootState) => state.appState.user) as User;

  const url = useSelector((state: RootState) => state.appState.url) || "";

  const userTimezone = useSelector((state: RootState) => {
    const user = state.appState.user;
    return user && user.timeZone;
  }) as string;

  const errorWhileFetchingWorklogs = useSelector((state: RootState) => state.worklogs.error);

  const { worklogs, month, year, day, user, holidays } = useSelector((state: RootState) => state.worklogs);

  const worklogsByDate = groupWorklogsByDates(worklogs, userTimezone);
  const totalLoggedTime = sumTotalLoggedTime(worklogs);

  const [selectedDate, setSelectedDate] = useState(getInitialDate({ month, year, day }));

  const [modalVisible, setModalVisible] = useState(false);

  const setQueryParams = (keys: { [key: string]: string | number }) => {
    const urlParams = new URLSearchParams();
    Object.entries(keys).forEach(([key, value]) => urlParams.set(key, value.toString()));
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
        day: query.get("day"),
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

  const onViewChanged = (date: moment.Moment, changedUser: User) => {
    setSelectedDate(date);
    const changedYear = date.year();
    const changedMonth = date.month();
    const changedDay = date.date();
    setQueryParams({
      year: changedYear,
      month: changedMonth,
      day: changedDay,
      user: changedUser.accountId,
    });

    if (changedMonth !== month || changedYear !== year || (user && user.accountId) !== changedUser.accountId) {
      const { from, to } = getDateSpan(moment([changedYear, changedMonth]));

      fetchWorklogs(from, to, changedUser);
    }
  };

  const handleRefresh = () => {
    if (user) {
      const { from, to } = getDateSpan(selectedDate);
      fetchWorklogs(from, to, user);
    }
  };

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };

  const handleAdded = () => {
    handleRefresh();
    handleHideModal();
  };

  const initialized = () => !isNil(user) && !isNil(month) && !isNil(year);
  const worklogForSelectedDate = getWorklogForDate(worklogsByDate, selectedDate);

  const timeLoggedForSelectedDate = sumTotalLoggedTime(worklogForSelectedDate);

  const canEdit = () => {
    return (user && user.accountId) === appUser.accountId;
  };

  return (
    <div className="home">
      {initialized() ? (
        <>
          <div className="home__container">
            <div className="home__content">
              <WorklogCalendar
                url={url}
                holidays={holidays}
                userWorklogs={user as User}
                isFetchingWorklogs={isFetchingWorklogs}
                selectedDate={selectedDate}
                onViewChanged={onViewChanged}
                onAddWorklogClick={handleShowModal}
                onRefresh={handleRefresh}
                worklogs={worklogsByDate}
                totalLoggedTime={totalLoggedTime}
              />
            </div>
            <div className="home__sider">
              <DetailsSider
                jiraUrl={url}
                selectedDate={selectedDate}
                worklogs={worklogForSelectedDate}
                canEdit={canEdit()}
                onWorklogDeleted={handleRefresh}
              />
            </div>
          </div>
          <AddWorklogFormModal
            selectedDate={selectedDate}
            modalVisible={modalVisible}
            timeLoggedForSelectedDate={timeLoggedForSelectedDate}
            onHideModal={handleHideModal}
            onAdded={handleAdded}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
