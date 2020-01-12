import React from "react";
import { DATE_FORMAT, WorklogGroups } from "./groupWorklogsByDates";
import { Moment } from "moment";
import "./DateCell.css";

const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = (seconds / 60) % 60;
  const stringMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hours}:${stringMinutes}`;
};

const DateCellFactory = (worklogs: WorklogGroups) => (value: Moment) => {
  const key = value.format(DATE_FORMAT);
  const worklogsToRender = worklogs[key];
  if (!worklogsToRender) {
    return null;
  }
  return (
    <ul className="worklogs">
      {worklogsToRender.map(worklog => (
        <li className="worklog-list-item" key={worklog.issueKey}>
          <a href="#">{worklog.issueKey}</a>
          <span>{formatDuration(worklog.timeSpent)}</span>
        </li>
      ))}
    </ul>
  );
};

export default DateCellFactory;
