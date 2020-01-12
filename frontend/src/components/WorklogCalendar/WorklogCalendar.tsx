import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { Calendar, Spin, Typography } from "antd";
import { Worklog } from "../../models/Worklog";
import { groupWorklogsByDates } from "./groupWorklogsByDates";
import DateCellFactory from "./DateCell";
import { formatDuration } from "../../utils/duration";
import "./WorklogCalendar.css";

interface WorklogCalendarProps {
  isFetchingWorklogs: boolean;
  worklogs: Worklog[];
  userTimezone: string;
  onViewChanged: (from: Date, to: Date) => void;
}

const sumTotalLoggedTime = (worklogs: Worklog[]): number => {
  if (!worklogs) {
    return 0;
  }
  return worklogs.reduce(
    (sum, worklog) =>
      sum +
      worklog.worklogs.reduce(
        (subSum, worklogItem) => subSum + worklogItem.timeSpentSeconds,
        0
      ),
    0
  );
};

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
      <div className="worklog-calendar__header">
        <div className="worklog-calendar__total-summary">
          <Typography.Text>Total logged:</Typography.Text>
          <Typography.Text strong>
            {formatDuration(sumTotalLoggedTime(worklogs))}
          </Typography.Text>
        </div>
      </div>
      <Calendar
        value={selectedDate}
        onChange={dateChanged}
        dateFullCellRender={dateCellRenderer}
      />
    </Spin>
  );
};

export default WorklogCalendar;
