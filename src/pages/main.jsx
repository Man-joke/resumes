import { ConfigProvider, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React from "react";
import SiderMenu from "../components/siderMenu";

const maxWidth = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "1660px",
};

const siderStyle = {
  width: "100%",
  maxWidth: "30rem",
};

const contentStyle = {
  width: "100%",
  maxWidth: "136rem",
};

const main = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "#31383E",
            bodyBg: "#fff",
          },
        },
      }}
    >
      <div className="wrapper" style={{ background: "#D9D9D9" }}>
        <Layout style={maxWidth}>
          <Sider style={siderStyle}>
            <SiderMenu />
          </Sider>
          <Content style={contentStyle}>동전</Content>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default main;
