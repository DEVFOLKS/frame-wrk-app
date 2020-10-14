import React from "react";

import {CardType, CardSize} from './CardStyles';

function Card({size, type, children, className}) {

  return (
    <card className={`${CardType[type]} ${CardSize[size]} ${className}`}>
      {children}
    </card>
  )
}
export default Card;
