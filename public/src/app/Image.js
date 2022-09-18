export function Image(props) {
  var dimension = props.dimension.split(';');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "imageContainer",
    src: props.image.src,
    width: dimension[0],
    height: dimension[1],
    onClick: () => props.onClicked()
  }));
}