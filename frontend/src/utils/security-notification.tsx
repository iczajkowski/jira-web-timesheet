import React from "react";
import { Button, notification } from "antd";

const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" href={`https://${process.env.REACT_APP_DOMAIN}`}>
      Open HTTPs version
    </Button>
  );
  notification.open({
    message: "Your connection is not private!",
    description:
      "You are using unsecured version of this website. To open secured version click button below.",
    btn,
    key,
    duration: 0
  });
};

const securityNotification = () => {
  const isHttps = window.location.protocol === "https:";
  if (!isHttps) {
    openNotification();
  }
};

export default securityNotification;
