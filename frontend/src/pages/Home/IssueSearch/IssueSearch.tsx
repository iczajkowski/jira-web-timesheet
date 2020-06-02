import React from "react";
import { Select, Spin } from "antd";
import { debounce } from "lodash";
import { issues } from "../../../api/issues";
import { IssueSearchResponse } from "../../../models/Issue";

interface IssueSearchProps {}

interface IssueSearchState {
  data: IssueSearchResponse[];
  value: IssueSearchResponse | null;
  fetching: boolean;
}

class IssueSearch extends React.Component<IssueSearchProps, IssueSearchState> {
  state = {
    data: [],
    value: null,
    fetching: false
  };
  fetchId = 0;

  constructor(props: any) {
    super(props);
    this.fetchIssues = debounce(this.fetchIssues, 500);
  }

  fetchIssues = (value: string) => {
    if (!value) {
      return;
    }

    this.setState({ data: [], fetching: true });
    this.fetchId += 1;
    const currentFetchId = this.fetchId;
    issues(value).then(result => {
      if (currentFetchId === this.fetchId) {
        const issues = result.data;
        this.setState({ data: issues, fetching: false });
      }
    });
  };

  handleChange = (value: IssueSearchResponse) => {
    this.setState({
      value,
      data: [],
      fetching: false
    });
  };

  render() {
    return (
      <div className="user__search">
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder="Select user"
          value={this.state.value as any}
          onSearch={this.fetchIssues}
          onChange={this.handleChange}
          showArrow={false}
          filterOption={false}
          defaultActiveFirstOption={false}
          notFoundContent={this.state.fetching ? <Spin size="small" /> : null}
        >
          {(this.state.data as IssueSearchResponse[]).map(value => (
            <Select.Option key={value.id}>
              {value.key} - {value.summaryText}
            </Select.Option>
          ))}
        </Select>
      </div>
    );
  }
}

export default IssueSearch;
