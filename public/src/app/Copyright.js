export function Copyright(props) {
  const style = {
    "font-size": screen.width > 390 ? "3rem" : "1rem"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: style
  }, " ", props.message, " "));
}