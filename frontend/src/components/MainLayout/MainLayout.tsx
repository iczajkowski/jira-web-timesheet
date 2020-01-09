import React from "react";
import { Layout } from "antd";
import "./MainLayout.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducer";
import UserInfo from "../UserInfo/UserInfo";
import { User } from "../../models/User";
import { logout } from "../../api/authenticate";

const { Header, Content, Footer } = Layout;
// @ts-ignore
const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  const user = useSelector((state: RootState) => state.appState.user) as User;

  return (
    <Layout className="main-layout">
      <Header>
        <UserInfo user={user} onLogout={onLogout} />
      </Header>
      <Content className="main-layout__content">{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MainLayout;
