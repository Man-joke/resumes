import { ConfigProvider, Flex, Menu } from "antd";
import React, { useEffect, useState } from "react";

import manjoke from "../images/img-manjoke.png";
import { ReactComponent as Home } from "../images/ico-home.svg";
import { ReactComponent as Profile } from "../images/ico-profile.svg";
import { ReactComponent as Work } from "../images/ico-work.svg";
import { ReactComponent as Etc } from "../images/ico-etc.svg";
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    key: "1",
    // icon: <PieChartOutlined />,
    label: (
      <Link to="/">
        <Home />
        Home
      </Link>
    ),
  },
  {
    key: "2",
    // icon: <DesktopOutlined />,
    label: (
      <Link to="/profile">
        <Profile />
        Profile
      </Link>
    ),
  },
  {
    key: "3",
    // icon: <ContainerOutlined />,
    label: (
      <Link to="/work">
        <Work />
        Work
      </Link>
    ),
  },
  {
    key: "4",
    // icon: <ContainerOutlined />,
    label: (
      <Link to="/etc">
        <Etc />
        ETC
      </Link>
    ),
  },
];

const today = new Date();
const week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
const todayLabel = week[today.getDay()];
const formattedDate = `${today.getFullYear()}. ${
  today.getMonth() + 1
}. ${today.getDate()} ${todayLabel}`;

const SideMenu = () => {
  const location = useLocation();

  let result =1;
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    switch (path) {
      case "etc":
        result = "4";
        break;
      case "work":
        result = "3";
        break;
      case "profile":
        result = "2";
        break;
      default:
        result = "1";
    }
    setCurrent(result);
  }, [location]);

  const [current, setCurrent] = useState(result);

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

      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHoverColor: "#a1a1a1",
            },
          },
        }}
      >
        <Menu
          selectedKeys={[current]}
          items={items}
        ></Menu>
      </ConfigProvider>

      <div className="date-box">
        <p>{formattedDate}</p>
      </div>
    </>
  );
};

export default SideMenu;
