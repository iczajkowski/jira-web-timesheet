import React, { useEffect, useState } from "react";
import { Calendar, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getWorklogs } from "../../api/worklogs";
import moment, { Moment } from "moment";
import { RootState } from "../../reducer";

const getDateSpan = (current: Moment) => ({
  from: current.startOf("month").toDate(),
  to: current.endOf("month").toDate()
});

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(moment());

  const fetchWorklogs = (date: Moment) => {
    const dateSpan = getDateSpan(date);
    getWorklogs(dateSpan)(dispatch);
  };

  useEffect(() => fetchWorklogs(selectedDate), []);

  const isFetchingWorklogs = useSelector(
    (state: RootState) => state.worklogs.isFetchingWorklogs
  );

  const dateChanged = (value: any) => {
    setSelectedDate(value);
    if (!value.startOf("month").isSame(selectedDate.startOf("month"))) {
      fetchWorklogs(value);
    }
  };

  const worklogs = useSelector((state: RootState) => state.worklogs.worklogs);
  console.log({ worklogs });

  return (
    <div style={{ background: "white", flex: 1 }}>
      <Spin spinning={isFetchingWorklogs}>
        <Calendar value={selectedDate} onChange={dateChanged} />
      </Spin>
    </div>
  );
};

export default Home;
