import React from "react";
import { Select } from "antd";
const { Option } = Select;

export interface IssueSearchProps {
  value: any;
  onChange: (value: any) => void;
}

class IssueSearch extends React.Component {
  render() {
    return (
      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    );
  }
}

export default IssueSearch;
