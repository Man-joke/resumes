import {  Typography } from "antd";
import React from "react";
import Works from "../components/Works";
const { Title } = Typography;
const Work = () => {
  return (
    <section className="section">
      <div className="section-top">
        <Title level={3} className="title title-h3">
          PROFILE
        </Title>
        <p className="text">WORK EXPERIENCE</p>
      </div>
      <div className="works-wrap">
        <Works />
      </div>
    </section>
  );
};

export default Work;
