import moment, { Moment } from "moment";
import React, { useEffect } from "react";
import { Button, Calendar, Icon, Spin, Statistic } from "antd";
import { WorklogGroups } from "../utils/groupWorklogsByDates";
import DateCellFactory from "./DateCell";
import { formatSecondsAsDuration } from "../../../utils/duration";
import "./WorklogCalendar.css";
import UserSearch from "../UserSearch/UserSearch";
import { User } from "../../../models/User";

interface WorklogCalendarProps {
  url: string;
  isFetchingWorklogs: boolean;
  userWorklogs: User;
  worklogs: WorklogGroups;
  selectedDate: moment.Moment;
  totalLoggedTime: number;
  onAddWorklogClick: () => void;
  onViewChanged: (selectedDate: moment.Moment, user: User) => void;
  onRefresh: () => void;
}

const WorklogCalendar: React.FC<WorklogCalendarProps> = ({
  url,
  onViewChanged,
  onRefresh,
  isFetchingWorklogs,
  worklogs,
  selectedDate,
  totalLoggedTime,
  userWorklogs,
  onAddWorklogClick
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
    if (key === "r") {
      onRefresh();
    }
  };

  const dateCellRenderer = DateCellFactory(worklogs, url);

  return (
    <Spin spinning={isFetchingWorklogs}>
      <div className="worklog-calendar__header">
        <div className="worklog-calendar__total-summary">
          <Statistic
            title="Total logged:"
            value={formatSecondsAsDuration(totalLoggedTime)}
          />
        </div>
        <Button
          type="primary"
          icon="plus-circle"
          className="worklog-calendar__button-add"
          onClick={onAddWorklogClick}
        >
          Add
        </Button>
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
