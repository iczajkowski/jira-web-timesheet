import React from "react";
import { DATE_FORMAT, WorklogGroups } from "../utils/groupWorklogsByDates";
import { Moment } from "moment";
import "./DateCell.css";
import { formatSecondsAsDuration } from "../../../utils/duration";
import { Typography } from "antd";
import { issueUrl } from "../utils/issueUrl";
import { FULL_WORKDAY_IN_SECONDS } from "../../../utils/constants";

const { Text } = Typography;

const DateCellFactory = (worklogs: WorklogGroups, url: string) => (
  value: Moment
) => {
  const key = value.format(DATE_FORMAT);
  const worklogsToRender = worklogs[key];
  const total =
    worklogsToRender &&
    worklogsToRender.reduce((sum, worklog) => sum + worklog.timeSpent, 0);
  const fullDateLogged = total === FULL_WORKDAY_IN_SECONDS;

  return (
    <div className="ant-fullcalendar-date">
      <div className="ant-fullcalendar-value callendar-cell__header">
        {worklogsToRender && (
          <span className="callendar-cell__total-time">
            <Text type={fullDateLogged ? undefined : "warning"}>
              Total: {formatSecondsAsDuration(total)}{" "}
            </Text>
          </span>
        )}
        <span className="callendar-cell__day">{value.date()}</span>
      </div>
      <div className="ant-fullcalendar-content">
        {worklogsToRender && (
          <div>
            <ul className="worklogs">
              {worklogsToRender.map((worklog, index) => (
                <li
                  className="worklog-list-item"
                  key={`${worklog.issueKey}_${index}`}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={issueUrl(url, worklog.issueKey)}
                  >
                    {worklog.issueKey}
                  </a>
                  <span>{formatSecondsAsDuration(worklog.timeSpent)}</span>
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
