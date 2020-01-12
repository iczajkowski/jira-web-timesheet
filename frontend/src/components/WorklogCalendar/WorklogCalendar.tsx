import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { Calendar, Spin } from "antd";
import { Worklog } from "../../models/Worklog";
import { groupWorklogsByDates } from "./groupWorklogsByDates";
import DateCellFactory from "./DateCell";

interface WorklogCalendarProps {
  isFetchingWorklogs: boolean;
  worklogs: Worklog[];
  userTimezone: string;
  onViewChanged: (from: Date, to: Date) => void;
}

const WorklogCalendar: React.FC<WorklogCalendarProps> = ({
  onViewChanged,
  isFetchingWorklogs,
  userTimezone,
  worklogs
}) => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const getDateSpan = (current: Moment) => ({
    from: current.startOf("month").toDate(),
    to: current.endOf("month").toDate()
  });

  const dateChanged = (value: any) => {
    setSelectedDate(value);
    if (!value.startOf("month").isSame(selectedDate.startOf("month"))) {
      const dateSpan = getDateSpan(value);
      onViewChanged(dateSpan.from, dateSpan.to);
    }
  };

  useEffect(() => {
    const dateSpan = getDateSpan(selectedDate);
    onViewChanged(dateSpan.from, dateSpan.to);
  }, []);

  const groupedWorklogs = groupWorklogsByDates(worklogs, userTimezone);
  const dateCellRenderer = DateCellFactory(groupedWorklogs);

  return (
    <Spin spinning={isFetchingWorklogs}>
      <Calendar
        value={selectedDate}
        onChange={dateChanged}
        dateCellRender={dateCellRenderer}
      />
    </Spin>
  );
};

export default WorklogCalendar;
