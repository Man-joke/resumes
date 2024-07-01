import {  Typography } from "antd";
import React from "react";
import WorkItem from "../components/WorkItem";
const { Title } = Typography;
const work = () => {
  return (
    <section className="section">
      <div className="section-top">
        <Title level={3} className="title title-h3">
          PROFILE
        </Title>
        <p className="text">WORK EXPERIENCE</p>
      </div>
      <div className="works-wrap">
        <WorkItem />
      </div>
    </section>
  );
};

export default work;
