import React from "react";

import {TypogrpahyType, TypogrpahyColor} from './TypographyTheme';

function Typogrpahy({color, type, children, className}) {

  return (
    <typogrpahy className={`${TypogrpahyType[type]} ${TypogrpahyColor[color]} ${className}`}>{children}</typogrpahy>
  )
}
export default Typogrpahy;