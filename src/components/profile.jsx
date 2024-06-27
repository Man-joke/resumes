import { Col, Flex, Row, Space, Typography } from "antd";
import React from "react";
const { Title } = Typography;
const profile = () => {
  return (
    <section className="section">
      <div className="section-top">
        <Title level={3} className="title title-h3">
          Profile
        </Title>
        <p className="text">I'm Web Publisher</p>
      </div>

      <Row>
        <Col span={24}>
          <Flex justify="space-between">
            <Space>이미지</Space>
            <Space>프로필</Space>
          </Flex>
          <Row>
            <Col>
                <img src="" alt="프로필" />
                <ul>
                  <li>이력사항</li>
                  <li>이력사항</li>
                  <li>이력사항</li>
                  <li>이력사항</li>
                </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default profile;
