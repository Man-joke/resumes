import React from "react";
import { Flex } from "antd";

const WorkItem = ({ works, handleItemClick }) => {
  return (
    <Flex wrap className="items-wrap work">
      {works.map((item, idx) => (
        <div className="items" key={item.name} onClick={() => handleItemClick(idx)}>
          <figure className="figure">
            <img src={item.img} alt={item.name} />
          </figure>
          <p>{item.name}</p>
        </div>
      ))}
    </Flex>
  );
};

export default WorkItem;
