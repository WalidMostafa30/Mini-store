/* eslint-disable react/prop-types */
import "./BarsMenu.css"

const BarsMenu = ({onClick,status}) => {
  return (
    <div
      onClick={onClick}
      className={status ? "BarsMenu open" : "BarsMenu"}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BarsMenu
