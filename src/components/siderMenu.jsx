import { Flex, Menu } from "antd";
import React from "react";

import manjoke from "../images/img-manjoke.png";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    // icon: <PieChartOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    // icon: <DesktopOutlined />,
    label: <Link to="/profile">Profile</Link>,
  },
  {
    key: "3",
    // icon: <ContainerOutlined />,
    label: <Link to="/work">Work</Link>,
  },
  {
    key: "4",
    // icon: <ContainerOutlined />,
    label: <Link to="/etc">ETC</Link>,
  },
];

const sidermenu = () => {
  return (
    <>
      <div className="portfolio">
        <h2>Portfolio</h2>
      </div>

      <Flex vertical justify="center" align="center" className="my-info">
        <figure className="figure">
          <img src={manjoke} alt="프로필이미지" />
        </figure>
        <h3>장만순</h3>
        <p>Man Joke</p>
      </Flex>

      <Menu items={items}></Menu>
    </>
  );
};

export default sidermenu;
