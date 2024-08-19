/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./Setting.css";
import { useEffect, useState } from "react";
import DarkModeCheckBox from "../DarkModeCheckBox/DarkModeCheckBox";
import { toggleDarkMode } from "../../store/darkModeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import ColorTheme from "../ColorTheme/ColorTheme";

const Setting = () => {
  const [opensetting, setOpensetting] = useState(false);

  const dispatch = useDispatch();

  const themeColor = useSelector((state) => state.color);

  const darkMode = useSelector((state) => state.dark);

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", themeColor);

    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [themeColor, darkMode]);

  return (
    <div className={opensetting ? "Setting open" : "Setting"}>
      <button
        className={opensetting ? "Setting__btn active" : "Setting__btn"}
        onClick={() => setOpensetting(!opensetting)}
      >
        <FontAwesomeIcon icon={faGear} />
      </button>

      <h5 className="Setting__title">{darkMode ? "Light" : "Dark"} Mode</h5>
      <DarkModeCheckBox onClick={() => dispatch(toggleDarkMode())} />

      <h5 className="Setting__title">Color Theme</h5>
      <ColorTheme />
    </div>
  );
};

export default Setting;
