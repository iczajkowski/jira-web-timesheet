import React from "react";
import { Card } from "antd";
import "./DetailsSider.css";
import moment from "moment";

interface DetailsSiderProps {
  selectedDate: moment.Moment;
}

const DetailsSider: React.FC<DetailsSiderProps> = ({ selectedDate }) => {
  const dateText = selectedDate.format("l");

  return (
    <Card className="details-sider" title={dateText}>
      <ul>
        <li>D4SLB-1013</li>
        <li>D4SLB-1015</li>
        <li>D4SLB-1014</li>
      </ul>
    </Card>
  );
};

export default DetailsSider;
