import { Typography } from "antd";
import { useEffect, useState } from "react";
import EtcItem from "../components/EtcItem";
import etcItem from "../data/etcItem";

const { Title } = Typography;

const etc = () => {

  return (
    <section className="section-right">
      <h2 className="visual-hidden">ETC</h2>
      <div className="section-top">
        <Title level={3} className="title title-h3">
          ETC
        </Title>
        <p className="text">Other works</p>
      </div>
      <div className="works-wrap">
        <EtcItem etc={etcItem} />
      </div>
    </section>
  );
};

export default etc;
