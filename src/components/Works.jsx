import React from "react";
import { Flex } from "antd";

const itemsStyle = {
  position: "relative",
  padding: "0 5.4rem",
  width: "32rem",
  height: "24rem",
  borderRadius: "1.2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
};

const figureStyle = {
  position: "absolute",
  left: "50%",
  top: "45%",
  transform: "translate(-50%, -50%)",
  width: "calc(100% - 10.8rem)",
  height: "auto",
};

const imgStyle = {
  width: "100%",
  objectFit: "contain",
};

const pStyle = {
  textAlign: "center",
  fontSize: "2.6rem",
  lineHeight: 1,
  color: "#a1a1a1",
  fontWeight: 700,
  marginBottom: "3rem",
};

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
    <Flex gap={"4rem"} wrap justify="space-between">
      {worksList.map((item) => (
        <div className="items" style={itemsStyle} key={item.name}>
          <figure className="figure" style={figureStyle}>
            <img src={item.img} alt={item.name} style={imgStyle} />
          </figure>
          <p style={pStyle}>{item.name}</p>
        </div>
      ))}
    </Flex>
  );
};

export default Works;
