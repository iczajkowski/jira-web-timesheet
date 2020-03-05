import * as React from "react";
import { useState } from "react";
import { Select, Spin } from "antd";
import "./UserSearch.css";
import { searchUsers } from "../../api/users";
import debounce from "lodash/debounce";
import { User } from "../../models/User";

const fetchUsers = (
  setState: (searchState: { data: User[]; fetching: boolean }) => void
) => (value: string) => {
  setState({
    data: [],
    fetching: true
  });
  if (value) {
    searchUsers(value)
      .then(response => response.data)
      .then(data => {
        setState({
          data,
          fetching: false
        });
      });
  }
};

const UserSearch: React.FC = () => {
  const [state, setState] = useState({
    data: [],
    value: null,
    fetching: false
  });

  const onSearch = debounce(fetchUsers(setState as any), 800) as any;

  return (
    <div className="user__search">
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder="Select user"
        onSearch={onSearch}
        showArrow={false}
        notFoundContent={state.fetching ? <Spin size="small" /> : null}
      >
        {(state.data as User[]).map(value => (
          <Select.Option key={value.key}>{value.displayName} </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default UserSearch;
