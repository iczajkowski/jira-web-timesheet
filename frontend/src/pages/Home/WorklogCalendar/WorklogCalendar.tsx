import moment, { Moment } from "moment";
import React, { useState, useEffect } from "react";
import { Button, Calendar, Icon, Spin, Statistic } from "antd";
import { Worklog } from "../../../models/Worklog";
import { groupWorklogsByDates } from "./groupWorklogsByDates";
import DateCellFactory from "./DateCell";
import { formatDuration } from "../../../utils/duration";
import "./WorklogCalendar.css";
import UserSearch from "../UserSearch/UserSearch";
import { User } from "../../../models/User";

interface WorklogCalendarProps {
  url: string;
  isFetchingWorklogs: boolean;
  userWorklogs: User;
  worklogs: Worklog[];
  userTimezone: string;
  selectedDate: moment.Moment;
  onViewChanged: (selectedDate: moment.Moment, user: User) => void;
  onRefresh: () => void;
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
  onRefresh,
  isFetchingWorklogs,
  userTimezone,
  worklogs,
  selectedDate,
  userWorklogs
}) => {
  useEffect(() => {
    window.addEventListener("keyup", keydown);
    return () => {
      window.removeEventListener("keyup", keydown);
    };
  });

  const dateChanged = (value: Moment | undefined) => {
    if (!value) {
      return;
    }

    onViewChanged(value, userWorklogs);
  };

  const userSelected = (user: User) => {
    if (user.accountId !== userWorklogs.accountId) {
      onViewChanged(selectedDate, user);
    }
  };

  const forward = () => {
    const nextMonth = selectedDate.clone().add(1, "month");
    dateChanged(nextMonth);
  };

  const backward = () => {
    const previousMonth = selectedDate.clone().subtract(1, "month");
    dateChanged(previousMonth);
  };

  const keydown = ({ key }: { key: string }) => {
    switch (key) {
      case "ArrowLeft":
        backward();
        break;
      case "ArrowRight":
        forward();
        break;
      case "r":
        onRefresh();
        break;
    }
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
          <UserSearch user={userWorklogs} onUserSelect={userSelected} />
        </div>
        <Button.Group>
          <Button type="primary" onClick={backward}>
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary" onClick={onRefresh}>
            <Icon type="sync" />
            Refresh(R)
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
