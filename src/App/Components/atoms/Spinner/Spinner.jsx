import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import GridLoader from "react-spinners/GridLoader";
import PulseLoader from "react-spinners/PulseLoader";
import CircleLoader from "react-spinners/CircleLoader";
import DotLoader from "react-spinners/DotLoader";

function Spinner(props) {
  const { css, size, color, loading, type } = props;
  switch (type) {
    case "ClipLoader":
      return (
        <div className="sweet-loading">
          <ClipLoader
            css={css}
            size={size || 15}
            color={color}
            loading={loading}
          />
        </div>
      );
    case "GridLoader":
      return (
        <div className="sweet-loading">
          <GridLoader
            css={css}
            size={size || 15}
            color={color}
            loading={loading}
          />
        </div>
      );
    case "PulseLoader":
      return (
        <div className="sweet-loading">
          <PulseLoader
            css={css}
            size={size || 15}
            color={color}
            loading={loading}
          />
        </div>
      );
    case "CircleLoader":
      return (
        <div className="sweet-loading">
          <CircleLoader
            css={css}
            size={size || 50}
            color={color}
            loading={loading}
          />
        </div>
      );
    case "DotLoader":
      return (
        <div className="sweet-loading">
          <DotLoader
            css={css}
            size={size || 50}
            color={color}
            loading={loading}
          />
        </div>
      );
    default:
      return <h1>asdas</h1>;
  }
}
export default Spinner;
