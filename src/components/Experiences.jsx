import React from "react";
import ExperiencesItem from "./ExperiencesItem";
import { Col, Row } from "antd";

const Experiences = ({ educations, careers, certifications, programs }) => {
  return (
    <Row className="experience" gutter={[24, 24]}>
      <Col span={24} lg={12} xl={9}>
        <ExperiencesItem title="학력사항" experiences={educations} />
      </Col>
      <Col span={24} lg={12} xl={6}>
        <ExperiencesItem title="경력사항" experiences={careers} />
      </Col>
      <Col span={24} lg={12} xl={5}>
        <ExperiencesItem title="자격사항" experiences={certifications} />
      </Col>
      <Col span={24} lg={12} xl={4}>
        <ExperiencesItem title='프로그램' experiences={programs} /> 
      </Col>
    </Row>
  );
};

export default Experiences;
