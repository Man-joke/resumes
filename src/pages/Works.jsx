import { Typography } from "antd";
import React, { useState } from "react";
import WorkItem from "../components/WorkItem";
import Modal from "../components/Modal";

import thumbList from "../data/thumbList";
import worksList from "../data/worksList";

const { Title } = Typography;

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("");

  const handleItemClick = (items) => {
    setSelectedIndex(items);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  return (
    <section className="section-right">
      <h2 className="visual-hidden">WORK</h2>
      <div className="section-top">
        <Title level={3} className="title title-h3">
          WORK
        </Title>
        <p className="text">WORK EXPERIENCE</p>
      </div>
      <div className="works-wrap">
        <WorkItem works={worksList} handleItemClick={handleItemClick} />
        {isModalOpen && (
          <Modal onClose={handleCloseModal} item={thumbList[selectedIndex]} maskClosable={true}/>
        )}
      </div>
    </section>
  );
};

export default Works;
