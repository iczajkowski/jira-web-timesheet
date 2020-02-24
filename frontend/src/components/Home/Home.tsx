import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorklogs } from "../../api/worklogs";
import { RootState } from "../../reducer";
import WorklogCalendar from "../WorklogCalendar/WorklogCalendar";
import { message } from "antd";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const fetchWorklogs = (from: Date, to: Date) => {
    getWorklogs({ from, to })(dispatch);
  };

  const isFetchingWorklogs = useSelector(
    (state: RootState) => state.worklogs.isFetchingWorklogs
  );

  const worklogs = useSelector((state: RootState) => state.worklogs.worklogs);
  const url = useSelector((state: RootState) => state.appState.url) || "";
  const userTimezone = useSelector((state: RootState) => {
    const user = state.appState.user;
    return user && user.timeZone;
  }) as string;
  const errorWhileFetchingWorklogs = useSelector(
    (state: RootState) => state.worklogs.error
  );

  useEffect(() => {
    if (errorWhileFetchingWorklogs) {
      message.error("Could not fetch worklogs. Please try again.");
    }
  });

  return (
    <div style={{ background: "white", flex: 1 }}>
      <WorklogCalendar
        url={url}
        isFetchingWorklogs={isFetchingWorklogs}
        onViewChanged={fetchWorklogs}
        worklogs={worklogs}
        userTimezone={userTimezone}
      />
    </div>
  );
};

export default Home;
