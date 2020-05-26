import React from "react";
import { Card, List } from "antd";
import "./DetailsSider.css";
import moment from "moment";
import { WorklogModel } from "../utils/groupWorklogsByDates";
import { DetailsTitle } from "./DetailsTitle";
import { sumTotalLoggedTime } from "../utils/sumTotalLoggedTime";
import { formatDuration } from "../../../utils/duration";
import { issueUrl } from "../utils/issueUrl";

interface DetailsSiderProps {
  jiraUrl: string;
  selectedDate: moment.Moment;
  worklogs: WorklogModel[];
}

const DetailsSider: React.FC<DetailsSiderProps> = ({
  jiraUrl,
  selectedDate,
  worklogs
}) => {
  const totalLoggedTime = sumTotalLoggedTime(worklogs);

  return (
    <Card
      className="details-sider"
      title={DetailsTitle({ date: selectedDate, totalLoggedTime })}
    >
      <List
        header={<b>Logged Issues:</b>}
        dataSource={worklogs}
        renderItem={value => (
          <List.Item>
            <List.Item.Meta
              title={
                <a target="_blank" href={issueUrl(jiraUrl, value.issueKey)}>
                  {value.issueKey}
                </a>
              }
              description={
                <div className="issue__description">
                  <span>
                    Started at: <b>{moment(value.started).format("lll")}</b>
                  </span>
                  <span>
                    Logged: <b>{formatDuration(value.timeSpent)}</b>
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default DetailsSider;
