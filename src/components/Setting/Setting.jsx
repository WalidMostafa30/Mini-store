/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import DarkModeCheckBox from "../DarkModeCheckBox/DarkModeCheckBox";
import ColorTheme from "../ColorTheme/ColorTheme";
import { toggleDarkMode } from "../../store/darkModeSlice";
import "./Setting.css";

const Setting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.color);
  const isDarkMode = useSelector((state) => state.dark);

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", themeColor);

    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeColor, isDarkMode]);

  const handleToggleSettings = () => {
    setIsOpen((prev) => !prev);
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={`Setting ${isOpen ? "open" : ""}`}>
      <button
        className={`Setting__btn ${isOpen ? "active" : ""}`}
        onClick={handleToggleSettings}
      >
        <FontAwesomeIcon icon={faGear} />
      </button>

      <h5 className="Setting__title">{isDarkMode ? "Light" : "Dark"} Mode</h5>
      <DarkModeCheckBox onClick={handleToggleDarkMode} />

      <h5 className="Setting__title">Color Theme</h5>
      <ColorTheme />
    </div>
  );
};

export default Setting;
