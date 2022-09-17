export function Controls(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => props.stopImage()
  }, " Stop Image "), /*#__PURE__*/React.createElement("button", {
    onClick: () => props.setInterval()
  }, " Set Interval "), /*#__PURE__*/React.createElement("button", {
    onClick: () => props.setWidth()
  }, " Set Width "), /*#__PURE__*/React.createElement("button", {
    onClick: () => props.setHeight()
  }, " Set Height "), /*#__PURE__*/React.createElement("button", {
    onClick: () => props.setReset()
  }, " Reset "));
}