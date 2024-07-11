import React from "react";
import { Flex } from "antd";


const itemsStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: "0 5.4rem",
  width: '100%',
  maxWidth: "calc(33% - 4rem)",
  height: "calc(24rem - 4rem)",
  borderRadius: "1.2rem",
  border:'1px solid #A1A1A1'
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

const WorkItem = ({works}) => {
  return (
    <Flex wrap justify="space-between" className="work-wrap">
      {works.map((item) => (
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

export default WorkItem;
