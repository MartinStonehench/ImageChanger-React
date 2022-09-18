export function Image(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: props.image.src,
    width: props.dimension.split(';')[0],
    height: props.dimension.split(';')[1]
  }));
}