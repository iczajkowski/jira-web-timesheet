import React, { PropsWithChildren } from "react";
import { User } from "../../models/User";
import { Icon, Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import "./UserInfo.css";

interface Props {
  user: User;
  onLogout: () => void;
}

const UserInfo: React.FC<PropsWithChildren<Props>> = ({
  user,
  onLogout,
  children
}) => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      className="user-info__menu"
      selectable={false}
    >
      <SubMenu
        title={
          <span>
            <Icon type="user" />
            {user.displayName}
          </span>
        }
      >
        <Menu.Item disabled={true}>
          <img
            alt="avatar"
            src={user.avatarUrls["32x32"]}
            className="user-info__avatar"
          />
          {user.emailAddress}
        </Menu.Item>
        <Menu.Item disabled={true}>Timezone: {user.timeZone}</Menu.Item>
        <Menu.Item onClick={onLogout}>
          <Icon type="logout" />
          Logout
        </Menu.Item>
      </SubMenu>
      {children && (
        <Menu.Item className="user-info__extras">{children}</Menu.Item>
      )}
    </Menu>
  );
};

export default UserInfo;
