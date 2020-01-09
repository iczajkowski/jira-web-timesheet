import React from "react";
import { Layout } from "antd";
import "./MainLayout.css";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import UserInfo from "../UserInfo/UserInfo";
import { User } from "../../models/User";

const { Header, Content, Footer } = Layout;
// @ts-ignore
const MainLayout = ({ children }) => {
  const user = useSelector((state: RootState) => state.appState.user) as User;
  const logout = () => console.log("logout");

  return (
    <Layout className="main-layout">
      <Header>
        <UserInfo user={user} onLogout={logout} />
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MainLayout;
