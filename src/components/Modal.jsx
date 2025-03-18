import React from "react";

import { ReactComponent as Close } from "../images/ico-close.svg";
const Modal = ({ onClose, item }) => {
  const linkHandleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="modal-backdrop" onClick={ onClose }>
        <div className="modal">
          <button onClick={onClose} className="close">
            <Close />
          </button>
          <div className="top" style={{display: 'flex'}}>
            <figure>
              <img src={item.img} alt={item.name} />
            </figure>
            <div className="info">
              <h3>{item.name}</h3>
              <p>
                {item.detailsTitle} <br />
                {item.date}
              </p>
              <div className="link-wrap">
                {item.linkBtn.map((linkBtn) => (
                  <button
                    onClick={() => linkHandleClick(linkBtn.href)}
                    className="link"
                    key={linkBtn.text}
                  >
                    {linkBtn.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bottom">
            <p
              className="txt"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
            {item.additional.map((desc) => (
              <span key={desc.desc}>{desc.desc}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
