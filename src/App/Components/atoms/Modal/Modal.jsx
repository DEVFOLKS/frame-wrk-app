import React from "react";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

function Modal(props) {
  const { visible, onClose } = props;
  return (
    <Rodal visible={visible} onClose={onClose}>
      <div>{props.children}</div>
    </Rodal>
  );
}

export default Modal;
