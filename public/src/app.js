import { ImageChanger } from './app/ImageChanger.js';

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageChanger, {
      interval: 3_000,
      optimized: true
    }));
  }

}

const domTarget = document.querySelector('#app');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);