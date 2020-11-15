import React from "react";
import { Button, Card, Modal, List, message } from "antd";
import "./DetailsSider.css";
import moment from "moment";
import { WorklogModel } from "../utils/groupWorklogsByDates";
import { DetailsTitle } from "./DetailsTitle";
import { sumTotalLoggedTime } from "../utils/sumTotalLoggedTime";
import { formatDuration } from "../../../utils/duration";
import { issueUrl } from "../utils/issueUrl";
import { deleteWorklog } from "../../../api/worklogs";

interface DetailsSiderProps {
  jiraUrl: string;
  selectedDate: moment.Moment;
  worklogs: WorklogModel[];
  canEdit: boolean;
  onWorklogDeleted: () => void;
}

const DetailsSider: React.FC<DetailsSiderProps> = ({
  jiraUrl,
  selectedDate,
  worklogs,
  canEdit,
  onWorklogDeleted
}) => {
  const totalLoggedTime = sumTotalLoggedTime(worklogs);

  const handleDelete = (worklog: WorklogModel) => {
    Modal.confirm({
      title: `Do you want to remove worklog?`,
      content: `Confirm removing worklog from issue ${
        worklog.issueKey
      } logged at ${moment(worklog.started).format(
        "lll"
      )}. Time that was logged: ${formatDuration(worklog.timeSpent)}`,
      onOk: () => {
        return deleteWorklog({
          worklogId: worklog.id,
          issueId: worklog.issueId
        })
          .then(onWorklogDeleted)
          .catch(() => message.error("Could not delete worklog"));
      },
      onCancel: () => {}
    });
  };

  return (
    <Card
      className="details-sider"
      title={DetailsTitle({ date: selectedDate, totalLoggedTime })}
    >
      <List
        header={
          <div className="list__header">
            <b>Logged Issues:</b>
          </div>
        }
        dataSource={worklogs}
        renderItem={value => (
          <List.Item>
            <List.Item.Meta
              title={
                <div className="worklog-list__title">
                  <a target="_blank" href={issueUrl(jiraUrl, value.issueKey)}>
                    {value.issueKey}
                  </a>
                  {canEdit ? (
                    <Button
                      onClick={() => handleDelete(value)}
                      icon="delete"
                      size="small"
                    />
                  ) : (
                    ""
                  )}
                </div>
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
