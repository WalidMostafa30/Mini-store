/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import "./DarkModeCheckBox.css";
import { useSelector } from "react-redux";

const DarkModeCheckBox = ({ onClick }) => {
  const darkMode = useSelector((state) => state.dark);

  return (
    <div
      className={darkMode ? "DrakMode-checkBox active" : "DrakMode-checkBox"}
      onClick={onClick}
    >
      <span>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </span>
    </div>
  );
};

export default DarkModeCheckBox;
