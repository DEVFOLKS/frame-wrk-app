import React from "react";
import { Typography } from "../Typography";
import { InputType, InputSize } from "./TextfieldTheme";

function Textfield(props) {
  const { label, placeHolder, error, success, className, type, size } = props;
  return (
    <div className="flex flex-col">
      {label && (
        <Typography color="primary" type="body1" className="mb-2">
          {" "}
          {label}{" "}
        </Typography>
      )}
      <input
        type="text"
        className={`${InputType[type]} ${InputSize[size]} ${className}`}
        placeholder={placeHolder}
        {...props}
      />
      {error && <Typography className="text-danger mt-2" type="body2">{error}</Typography>}
      {success && <Typography className="text-success mt-2" type="body2">{success}</Typography>}
    </div>
  );
}
export default Textfield;
