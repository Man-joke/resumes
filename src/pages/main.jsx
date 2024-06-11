import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React from "react";

const maxWidth = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "1660px",
};

const main = () => {
  return (
    <div className="wrapper" style={{  background: "#D9D9D9"}}>
      <Layout style={maxWidth}>
        <Sider style={{ width: "300px", background: "lightblue" }}>사람</Sider>
        <Content style={{ width: "1360px", background: "lightpink" }}>
          동전
        </Content>
      </Layout>
    </div>
  );
};

export default main;
