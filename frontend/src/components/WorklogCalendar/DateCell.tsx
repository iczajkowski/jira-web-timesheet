import React from "react";
import { DATE_FORMAT, WorklogGroups } from "./groupWorklogsByDates";
import { Moment } from "moment";
import "./DateCell.css";
import { formatDuration } from "../../utils/duration";

const buildHref = (url: string, issueKey: string) => {
  return `https://${url}/browse/${issueKey}`;
};

const DateCellFactory = (worklogs: WorklogGroups, url: string) => (
  value: Moment
) => {
  const key = value.format(DATE_FORMAT);
  const worklogsToRender = worklogs[key];
  const total =
    worklogsToRender &&
    worklogsToRender.reduce((sum, worklog) => sum + worklog.timeSpent, 0);
  return (
    <div className="ant-fullcalendar-date">
      <div className="ant-fullcalendar-value callendar-cell__header">
        {worklogsToRender && (
          <span className="callendar-cell__total-time">
            Total: {formatDuration(total)}
          </span>
        )}
        <span className="callendar-cell__day">{value.date()}</span>
      </div>
      <div className="ant-fullcalendar-content">
        {worklogsToRender && (
          <div>
            <ul className="worklogs">
              {worklogsToRender.map(worklog => (
                <li className="worklog-list-item" key={worklog.issueKey}>
                  <a target="_blank" href={buildHref(url, worklog.issueKey)}>
                    {worklog.issueKey}
                  </a>
                  <span>{formatDuration(worklog.timeSpent)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateCellFactory;
