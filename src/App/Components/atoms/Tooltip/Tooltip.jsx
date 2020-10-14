import React from "react";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

function ToolTip({ type, place }) {
  return <ReactTooltip type={type} place={place} />;
}

ToolTip.propTypes = {
  type: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};

export default ToolTip;
