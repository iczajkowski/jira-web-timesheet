import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { Button, Calendar, Icon, Spin, Statistic } from "antd";
import { Worklog } from "../../models/Worklog";
import { groupWorklogsByDates } from "./groupWorklogsByDates";
import DateCellFactory from "./DateCell";
import { formatDuration } from "../../utils/duration";
import "./WorklogCalendar.css";
import UserSearch from "../UserSearch/UserSearch";
import { User } from "../../models/User";

interface WorklogCalendarProps {
  url: string;
  isFetchingWorklogs: boolean;
  userWorklogs: User;
  worklogs: Worklog[];
  userTimezone: string;
  onViewChanged: (from: Date, to: Date, user: User) => void;
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
  url,
  onViewChanged,
  isFetchingWorklogs,
  userTimezone,
  worklogs,
  userWorklogs
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
      onViewChanged(dateSpan.from, dateSpan.to, userWorklogs);
    }
  };

  const forward = () => {
    const previousMonth = selectedDate.clone().add(1, "month");
    dateChanged(previousMonth);
  };

  const backward = () => {
    const nextMonth = selectedDate.clone().subtract(1, "month");
    dateChanged(nextMonth);
  };

  const refresh = () => {
    const dateSpan = getDateSpan(selectedDate);
    onViewChanged(dateSpan.from, dateSpan.to, userWorklogs);
  };

  useEffect(() => {
    const dateSpan = getDateSpan(selectedDate);
    onViewChanged(dateSpan.from, dateSpan.to, userWorklogs);
  }, []);

  const groupedWorklogs = groupWorklogsByDates(worklogs, userTimezone);
  const dateCellRenderer = DateCellFactory(groupedWorklogs, url);

  return (
    <Spin spinning={isFetchingWorklogs}>
      <div className="worklog-calendar__header">
        <div className="worklog-calendar__total-summary">
          <Statistic
            title="Total logged:"
            value={formatDuration(sumTotalLoggedTime(worklogs))}
          />
        </div>
        <div className="worklog-calendar__user">
          <UserSearch user={userWorklogs} />
        </div>
        <Button.Group>
          <Button type="primary" onClick={backward}>
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary" onClick={refresh}>
            <Icon type="sync" />
            Refresh
          </Button>
          <Button type="primary" onClick={forward}>
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
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
