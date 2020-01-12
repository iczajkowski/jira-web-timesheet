import React from "react";
import { DATE_FORMAT, WorklogGroups } from "./groupWorklogsByDates";
import { Moment } from "moment";
import "./DateCell.css";
import { formatDuration } from "../../utils/duration";

const DateCellFactory = (worklogs: WorklogGroups) => (value: Moment) => {
  const key = value.format(DATE_FORMAT);
  const worklogsToRender = worklogs[key];
  return (
    <div className="ant-fullcalendar-date">
      <div className="ant-fullcalendar-value">{value.date()}</div>
      <div className="ant-fullcalendar-content">
        {worklogsToRender && (
          <ul className="worklogs">
            {worklogsToRender.map(worklog => (
              <li className="worklog-list-item" key={worklog.issueKey}>
                <a href="#">{worklog.issueKey}</a>
                <span>{formatDuration(worklog.timeSpent)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DateCellFactory;
