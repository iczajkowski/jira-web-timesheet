import React, { useEffect, useState } from "react";
import { Calendar, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getWorklogs } from "../../api/worklogs";
import moment, { Moment } from "moment";
import { RootState } from "../../reducer";
import WorklogCalendar from "../WorklogCalendar/WorklogCalendar";

const getDateSpan = (current: Moment) => ({
  from: current.startOf("month").toDate(),
  to: current.endOf("month").toDate()
});

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const fetchWorklogs = (from: Date, to: Date) => {
    getWorklogs({ from, to })(dispatch);
  };

  const isFetchingWorklogs = useSelector(
    (state: RootState) => state.worklogs.isFetchingWorklogs
  );

  const worklogs = useSelector((state: RootState) => state.worklogs.worklogs);
  console.log({ worklogs });

  return (
    <div style={{ background: "white", flex: 1 }}>
      <WorklogCalendar
        isFetchingWorklogs={isFetchingWorklogs}
        onViewChanged={fetchWorklogs}
        worklogs={worklogs}
      />
    </div>
  );
};

export default Home;
