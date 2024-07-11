import {  Typography } from "antd";
import React from "react";
import WorkItem from "../components/WorkItem";
const { Title } = Typography;
const worksList = [
  {
    img: require('../images/logos/eugenefn.jpg'),
    name: "AI 디지털",
  },
  {
    img: require('../images/logos/namyang.png'),
    name: "아트봉봉",
  },
  {
    img: require('../images/logos/namyang.png'),
    name: "유플래너",
  },
  {
    img: require('../images/logos/namyang.png'),
    name: "유진투자증권",
  },
  {
    img: require('../images/logos/namyang.png'),
    name: "남양주주자치센터",
  },
  {
    img: require('../images/logos/moviechart.png'),
    name: "무비차트",
  },
  {
    img: require('../images/logos/kshrd.png'),
    name: "한국평생교육원",
  },
  {
    img: require('../images/logos/homeT.jpg'),
    name: "홈트",
  },
  {
    img: require('../images/logos/dongwha.jpg'),
    name: "동화자연마루",
  },
  {
    img: require('../images/logos/tving.jpg'),
    name: "티빙",
  },
  {
    img: require('../images/logos/art1.jpg'),
    name: "art1",
  },
  {
    img: require('../images/logos/howru.jpg'),
    name: "하우루",
  },
];
const Works = () => {
  return (
    <section className="section">
      <h2 className="visual-hidden">WORK</h2>
      <div className="section-top">
        <Title level={3} className="title title-h3">
          WORK
        </Title>
        <p className="text">WORK EXPERIENCE</p>
      </div>
      <div className="works-wrap">
        <WorkItem works={worksList} />
      </div>
    </section>
  );
};

export default Works;
