import React from "react";

const Modal = ({ onClose, selectedIndex, thumbList }) => {
  const selectedItem = thumbList[selectedIndex];
  return (
    <>
      <div className="modal-backdrop">
        <div className="modal">
          <button onClick={onClose}>닫기</button>
          <div className="top">
            <figure>
              <img src={selectedItem.img} alt={selectedItem.name} />
            </figure>
            <div className="info">
              <h3>
                {selectedItem.name}
                {selectedItem.link && (
                  <a href={selectedItem.link} target="_blank">
                    {selectedItem.link}
                  </a>
                )}
              </h3>
              <p>
                {selectedItem.detailsTitle} <br />
                {selectedItem.date}
              </p>
              <div className="link-wrap">
                {selectedItem.linkBtn.map((item, idx) => (
                  <a
                    href={item.href}
                    target="_blank"
                    className="link"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bottom">
            <p
              className="txt"
              dangerouslySetInnerHTML={{ __html: selectedItem.description }}
            ></p>
            {selectedItem.additional.map((item) => (
              <span key={item}>{item.desc}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
