import { Flex } from "antd";
import React from "react";

const titleStyle = {
  fontSize: "18px",
  color: "#222",
  lineHeight: "26px",
  fontWeight: "bold",
};

const yearStyle = {
  flexShrink: 0,
  fontSize: "14px",
  color: "#222",
  lineHeight: "19px",
  fontWeight: "bold",
};
const valStyle = {
  marginLeft: "10px",
  fontSize: "14px",
  color: "#222",
  lineHeight: "19px",
  wordBreak: 'keep-all'
};

const ExperienceItem = ({ title, experiences }) => {
  return (
    <div>
      <h3 style={titleStyle}>{title}</h3>
      {title === "프로그램" ? (
      <Flex style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginTop:'0.8rem' }}>
          {experiences.map((item, index) => (
            <img
              key={index}
              src={item.images}
              alt={`프로그램 ${index + 1}`}
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
            />
          ))}
        </Flex>
      ) : (
        <ul>
          {experiences.map((item, index) => (
            <li key={index} style={{ display: "flex", marginLeft: '0.8rem', marginBlock: "0.8rem" }}>
              <span style={yearStyle}>{item.year} </span>
              <span style={valStyle}>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceItem;
