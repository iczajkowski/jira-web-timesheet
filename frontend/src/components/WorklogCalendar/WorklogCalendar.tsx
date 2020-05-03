import moment, { Moment } from "moment";
import React, { useState } from "react";
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
  month: number;
  year: number;
  onViewChanged: (year: number, month: number, user: User) => void;
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

const getYearAndMonth = (moment: Moment) => {
  return {
    year: moment.year(),
    month: moment.month()
  };
};

const WorklogCalendar: React.FC<WorklogCalendarProps> = ({
  url,
  onViewChanged,
  isFetchingWorklogs,
  userTimezone,
  worklogs,
  month,
  year,
  userWorklogs
}) => {
  const [selectedDate, setSelectedDate] = useState(moment([year, month]));

  const dateChanged = (value: any) => {
    setSelectedDate(value);
    if (!value.startOf("month").isSame(selectedDate.startOf("month"))) {
      const { year, month } = getYearAndMonth(value);
      onViewChanged(year, month, userWorklogs);
    }
  };

  const userSelected = (user: User) => {
    if (user.accountId !== userWorklogs.accountId) {
      const { year, month } = getYearAndMonth(selectedDate);
      onViewChanged(year, month, user);
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
    const { year, month } = getYearAndMonth(selectedDate);
    onViewChanged(year, month, userWorklogs);
  };

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
          <Button type="link">Show mine</Button>
          <UserSearch user={userWorklogs} onUserSelect={userSelected} />
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
