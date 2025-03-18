import { Flex } from "antd";

const EtcItem = ({ etc }) => {
  return (
    <Flex wrap className="items-wrap etc">
        {etc.map((item, idx) => (
          <div className="items" key={item.id}>
            <figure className="figure">
              <img src={item.img} alt={item.name} className="w-full rounded" />
            </figure>
            <p>{item.name}</p>
          </div>
        ))}
    </Flex>
  );
};

export default EtcItem;
