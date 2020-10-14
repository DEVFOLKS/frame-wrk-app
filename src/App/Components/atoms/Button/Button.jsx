import React from "react";

import {ButtonType, ButtonSize} from './ButtonStyles';

function Button(props) {
  const {size='sm', type, children, className} = props
  return (
    <button  {...props} className={`${ButtonType[type]} ${ButtonSize[size]} ${className}`}>{children}</button>
  )
}
export default Button;