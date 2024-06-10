import { useDispatch, useSelector } from "react-redux";
import "./ColorTheme.css";
import { setColor } from "../../rtk/colorSlice";

const ColorTheme = () => {
  const themeColor = useSelector((state) => state.color);

  const dispatch = useDispatch();

  const colors = ["#028dc9", "#eeb013", "#3fa45b", "#ba0d0d", "#714787"];

  return (
    <div className="ColorTheme__colors">
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className={
              themeColor === color
                ? "ColorTheme__color active"
                : "ColorTheme__color"
            }
            style={{ backgroundColor: color }}
            onClick={() => dispatch(setColor(color))}
          />
        );
      })}
    </div>
  );
};

export default ColorTheme;
