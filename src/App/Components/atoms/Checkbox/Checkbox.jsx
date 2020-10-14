import React from "react";

function Checkbox(props) {
  const { label } = props;
  return (
    <div>
      {label && <label for="fname">{label}</label>}
      <input type="checkbox" {...props} />
    </div>
  );
}
export default Checkbox;
