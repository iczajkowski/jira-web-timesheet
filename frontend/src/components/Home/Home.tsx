import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorklogs } from "../../api/worklogs";
import { RootState } from "../../reducer";
import WorklogCalendar from "../WorklogCalendar/WorklogCalendar";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const fetchWorklogs = (from: Date, to: Date) => {
    getWorklogs({ from, to })(dispatch);
  };

  const isFetchingWorklogs = useSelector(
    (state: RootState) => state.worklogs.isFetchingWorklogs
  );

  const worklogs = useSelector((state: RootState) => state.worklogs.worklogs);
  const userTimezone = useSelector((state: RootState) => {
    const user = state.appState.user;
    return user && user.timeZone;
  }) as string;

  return (
    <div style={{ background: "white", flex: 1 }}>
      <WorklogCalendar
        isFetchingWorklogs={isFetchingWorklogs}
        onViewChanged={fetchWorklogs}
        worklogs={worklogs}
        userTimezone={userTimezone}
      />
    </div>
  );
};

export default Home;
