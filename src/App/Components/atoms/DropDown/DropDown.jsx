import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import PropTypes from "prop-types";

function DropDown({ options, onselect, defaultOption, placeholder }) {
  return (
    <div>
      <Dropdown
        options={options}
        onChange={onselect}
        value={defaultOption}
        placeholder={placeholder}
      />
    </div>
  );
}

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  onselect: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired || PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default DropDown;
