import { Grid, Tag, Typography } from "antd";
import React from "react";

const { useBreakpoint } = Grid;
const Home = () => {
  const { Title, Text } = Typography;

  const {lg} = useBreakpoint();

  const titleFontSize = lg ? "8rem" : '4rem'
  const subFontSize = lg ? "2.8rem" : '1.4rem'

  const titleStyled = {
    fontSize: titleFontSize,
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    marginBottom: "0",
  };

  const subStyled = {
    position: "absolute",
    left: "50%",
    bottom: "10rem",
    transform: "translateX(-50%)",
    fontSize: subFontSize,
    color: "#A1A1A1",
  };
  return (
    <>
      <Title level={2} className="text-center" style={titleStyled}>
        WELCOME TO MY <br />
        PORTFOLIO
      </Title>
      <Text style={subStyled}>방문해 주셔서 감사합니다.</Text>

    </>
  );
};

export default Home;
