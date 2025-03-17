import React from "react";
import { Route, Routes } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import SideMenu from "./SideMenu";


import Home from "./Home";
import Profile from "./Profile";
import Works from "./Works";
import ETC from "./Etc";

const {Content, Sider }  = Layout;

const maxWidth = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "1660px",
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
            sideBg: "#31383E",
            bodyBg: "#fff",
          },
        },
      }}
    >
      <div className="wrapper" style={{ background: "#D9D9D9" }}>
        <Layout style={maxWidth}>
          <Sider width={'30rem'}>
            <SideMenu />
          </Sider>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/work" element={<Works />}></Route>
              <Route path="/etc" element={<ETC />}></Route>
            </Routes>
          </Content>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default main;
