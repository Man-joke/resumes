import { Col, Flex, Row, Typography } from "antd";
import React from "react";
import Experiences from "../components/Experiences";

import ImgProfile from "../images/profile.jpg";
import images1 from "../images/skill-icon-01.png";
import images2 from "../images/skill-icon-02.png";
import images3 from "../images/skill-icon-03.png";
import images4 from "../images/skill-icon-04.png";
import images5 from "../images/skill-icon-05.png";
import images6 from "../images/skill-icon-06.png";
import images7 from "../images/skill-icon-07.png";

const MyInfo = [
  {
    tit: "Name",
    val: "장만순",
  },
  {
    tit: "Birthday",
    val: "1990. 09. 21",
  },
  {
    tit: "Phone",
    val: "010 - 8927 - 1926",
  },
  {
    tit: "E-Mail",
    val: "eoonw@naver.com",
  },
];

const educations = [
  {
    year: "2020",
    name: "스마트웹 콘텐츠제작 웹디자인 & 웹퍼블리셔 수료",
  },
  {
    year: "2017",
    name: "시각(e-book, & 편집) 디자인 수료",
  },
  {
    year: "2015",
    name: "강원대학교 삼척캠퍼스 산업디자인 학과 졸업",
  },
  {
    year: "2009",
    name: "강원대학교 삼척캠퍼스 산업디자인 학과 입학",
  },
];
const careers = [
  {
    year: "2023",
    name: "(주)돔팸 - (재직중)",
  },
  {
    year: "2023",
    name: "신사브릿지 (파견직)",
  },
  {
    year: "2022",
    name: "(주)오픈필드",
  },
  {
    year: "2021",
    name: "(주)위두커뮤니케이션즈",
  },
  {
    year: "2019",
    name: "연프러덕션 방송 미술",
  },
  {
    year: "2018",
    name: "(주)새날기획 편집디자인",
  },
];
const certifications = [
  {
    year: "2015",
    name: "GTQ 포토샵 1급",
  },
  {
    year: "2014",
    name: "GTQ 일러스트 1급",
  },
];
const programs = [
  {
    label: "HTML",
    images: images1,
  },
  {
    label: "CSS",
    images: images2,
  },
  {
    label: "JAVASCRIPT",
    images: images3,
  },
  {
    label: "JQUERY",
    images: images4,
  },
  {
    label: "SASS",
    images: images5,
  },
  {
    label: "VUE",
    images: images6,
  },
  {
    label: "REACT",
    images: images7,
  },
];

const { Title } = Typography;
const profile = () => {
  return (
    <section className="section-right">
      <div className="section-top">
        <Title level={3} className="title title-h3">
          Profile
        </Title>
        <p className="text">I'm Web Publisher</p>
      </div>
      <Row className="profile-box">
        <Col span={24}>
          <Flex justify="space-between" align="center">
            <Flex gap={24} className="profile">
              <figure className="img-wrap">
                <img src={ImgProfile} alt="프로필" />
              </figure>
              <p className="text">
                안녕하세요. <br />
                배움에 욕심이 있는 <br />
                <b>웹 퍼블리셔 장만순</b>입니다.
              </p>
            </Flex>
            <Flex className="information">
              <ul>
                {MyInfo.map((item) => (
                  <li key={item.val}>
                    <span>{item.tit} :</span> {item.val}
                  </li>
                ))}
              </ul>
            </Flex>
          </Flex>
        </Col>
        <Col span={24}>
          <Experiences
            educations={educations}
            careers={careers}
            certifications={certifications}
            programs={programs}
          />
        </Col>
      </Row>
    </section>
  );
};

export default profile;
