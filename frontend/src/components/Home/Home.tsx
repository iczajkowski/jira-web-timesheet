import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorklogs } from "../../api/worklogs";
import { RootState } from "../../reducer";
import WorklogCalendar from "../WorklogCalendar/WorklogCalendar";
import { message } from "antd";
import { User } from "../../models/User";
import { getDateSpan } from "../../utils/date";
import moment from "moment";
import { isNil } from "lodash";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const fetchWorklogs = (from: Date, to: Date, user: User) => {
    getWorklogs({ from, to, user: user })(dispatch);
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

  const { worklogs, month, year, user } = useSelector(
    (state: RootState) => state.worklogs
  );

  const setQueryParams = (year: number, month: number, user: User) => {
    history.push(`?year=${year}&month=${month}&user=${user.accountId}`);
  };

  useEffect(() => {
    if (errorWhileFetchingWorklogs) {
      message.error("Could not fetch worklogs. Please try again.");
    }
  });

  useEffect(() => {
    const { from, to } = getDateSpan(moment());
    fetchWorklogs(from, to, appUser);
  }, []);

  const onViewChanged = (year: number, month: number, user: User) => {
    const { from, to } = getDateSpan(moment([year, month]));
    setQueryParams(year, month, user);
    fetchWorklogs(from, to, user);
  };

  const initialized = () => !isNil(user) && !isNil(month) && !isNil(year);

  return (
    <div style={{ background: "white", flex: 1 }}>
      {initialized() ? (
        <WorklogCalendar
          url={url}
          userWorklogs={user as User}
          isFetchingWorklogs={isFetchingWorklogs}
          onViewChanged={onViewChanged}
          month={month as number}
          year={year as number}
          worklogs={worklogs}
          userTimezone={userTimezone}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
