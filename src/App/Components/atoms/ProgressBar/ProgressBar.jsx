import React from "react";
import PropTypes from "prop-types";
import {Typography} from '../Typography';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "center",
    transition: "width 1s ease-in-out",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <Typography color="white" type="body2"> {`${completed}%`} </Typography>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  bgcolor: PropTypes.string.isRequired,
};

export default ProgressBar;
