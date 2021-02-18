import React from "react";
import { DATE_FORMAT, WorklogGroups } from "../utils/groupWorklogsByDates";
import { Moment } from "moment";
import "./DateCell.css";
import { formatSecondsAsDuration } from "../../../utils/duration";
import { Typography } from "antd";
import { issueUrl } from "../utils/issueUrl";
import { FULL_WORKDAY_IN_SECONDS } from "../../../utils/constants";
import { isSaturday, isSunday } from "../../../utils/date";
import { Holiday } from "../../../models/Holiday";
import { isNil } from "lodash";
import { getHolidayName } from "./utils";

const { Text } = Typography;

const DateCellFactory = (worklogs: WorklogGroups, url: string, getHoliday: (value: Moment) => Holiday | null) => (
  value: Moment
) => {
  const key = value.format(DATE_FORMAT);
  const worklogsToRender = worklogs[key];
  const total = worklogsToRender && worklogsToRender.reduce((sum, worklog) => sum + worklog.timeSpent, 0);
  const fullDateLogged = total === FULL_WORKDAY_IN_SECONDS;
  const holiday = getHoliday(value);

  const getDateClassName = () => {
    let classesToApply = ["ant-fullcalendar-date"];
    if (isSunday(value) || !isNil(holiday)) {
      classesToApply = [...classesToApply, "calendar-holiday"];
    } else if (isSaturday(value)) {
      classesToApply = [...classesToApply, "calendar-saturday"];
    }
    return classesToApply.join(" ");
  };

  return (
    <div className={getDateClassName()}>
      <div className="ant-fullcalendar-value callendar-cell__header">
        <span className="callendar-cell__total-time">
          {holiday && <Text type="danger">{getHolidayName(holiday)}</Text>}
          {worklogsToRender && (
            <Text type={fullDateLogged ? undefined : "warning"}>Total: {formatSecondsAsDuration(total)} </Text>
          )}
        </span>
        <span className="callendar-cell__day">{value.date()}</span>
      </div>
      <div className="ant-fullcalendar-content">
        {worklogsToRender && (
          <div>
            <ul className="worklogs">
              {worklogsToRender.map((worklog, index) => (
                <li className="worklog-list-item" key={`${worklog.issueKey}_${index}`}>
                  <a target="_blank" rel="noopener noreferrer" href={issueUrl(url, worklog.issueKey)}>
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
