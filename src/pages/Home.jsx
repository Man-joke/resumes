import { Typography } from "antd";
import React from "react";

const home = () => {
  const { Title, Text } = Typography;

  const titleStyled = {
    fontSize: "10rem",
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    marginBottom: "0",
  };

  const subStyled = {
    position: 'absolute',
    left: "50%",
    bottom: '4rem',
    transform: 'translateX(-50%)',
    fontSize: '2rem',
    color: '#A1A1A1',
  }

  return (
    <>
      <Title level={2} className="text-center" style={titleStyled}>
        WELCOME TO MY <br />
        PORTFOLIO
      </Title>
      <Text style={subStyled} >방문해 주셔서 감사합니다.</Text>
    </>
  );
};

export default home;
