import { ImageChanger } from './app/ImageChanger.js';

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageChanger, null));
  }

}

const domTarget = document.querySelector('#app');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);