import moment from "moment";
import React from "react";
import { formatDuration } from "../../../utils/duration";
import "./DetailsTitle.css";

export interface DetailsTitleProps {
  date: moment.Moment;
  totalLoggedTime: number;
}

export const DetailsTitle: React.FC<DetailsTitleProps> = ({
  date,
  totalLoggedTime
}) => {
  return (
    <div className="details__title">
      <span>{date.format("ll")}</span>
      <span>{formatDuration(totalLoggedTime)}</span>
    </div>
  );
};
