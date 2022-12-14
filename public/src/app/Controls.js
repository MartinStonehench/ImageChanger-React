export function Controls(props) {
  const buttons = [{
    "name": "Stop Image",
    "event": () => props.stopImage()
  }, {
    "name": "Add Image",
    "event": () => props.addImage()
  }, {
    "name": "View all Images",
    "event": () => props.viewAllImages()
  }, {
    "name": "Set Interval",
    "event": () => props.setInterval()
  }, {
    "name": "Set Width",
    "event": () => props.setWidth()
  }, {
    "name": "Set Height",
    "event": () => props.setHeight()
  }, {
    "name": "Reset",
    "event": () => props.setReset()
  }, {
    "name": "About",
    "event": () => props.about()
  }];
  return /*#__PURE__*/React.createElement("div", {
    id: "container"
  }, buttons.map(item => {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: item.event
    }, " ", item.name, " "), /*#__PURE__*/React.createElement("br", null));
  }));
}