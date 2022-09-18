const images = [{
  'src': '../../images/Theraphosa_Stirmi.png',
  'alt': 'Theraphosa Stirmi'
}, {
  'src': '../../images/Black_Thai_Scorpion.png',
  'alt': 'Black Thai Scorpion'
}, {
  'src': '../../images/Hamster.png',
  'alt': 'Campbell Hamster'
}, {
  'src': '../../images/Winkelspinne.png',
  'alt': 'Winkelspinne'
}, {
  'src': '../../images/Nosferatuspinne.png',
  'alt': 'Nosferatuspinne'
}];
import { Controls } from './Controls.js';
import { Image } from './Image.js';
import { Headline } from './Headline.js';
export class ImageChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      src: images[0].src,
      alt: images[0].alt,
      width: 320,
      height: 240,
      stop: false,
      interval: props.interval,
      optimized: props.optimized
    };

    if (!this.state.stop) {
      setInterval(() => {
        this.setState(state => this.getNextImage(images, state));
      }, this.state.interval);
    }
  }

  getNextImage(array, value) {
    if (this.state.stop) return;

    if (value.counter < array.length - 1) {
      value.counter++;
    } else {
      value.counter = 0;
    }

    return value.counter;
  }

  onHandleClick() {
    this.setState(state => state.stop = !state.stop);
  }

  onHandleSetInterval() {
    var value = parseInt(window.prompt('Plesse enter your new inrerval : '));

    if (!value) {
      alert("Please enter a valid number !");
      return;
    }

    this.setState((state, props) => {
      interval: state.interval = parseInt(value);

      return state.interval;
    });
  }

  errorNaN() {
    alert("ERROR:\n\nPlease enter a valid number!");
    return;
  }

  onHandleSetWidth() {
    var width = parseInt(window.prompt('Plesse enter your new width value : '));
    if (!width) this.errorNaN();
    this.setState(state => state.width = width);
  }

  onHandleSetHeight() {
    var height = parseInt(window.prompt('Plesse enter your new height value : '));
    if (!height) this.errorNaN();
    this.setState(state => state.height = height);
  }

  onHandleReset() {
    this.setState(state => {
      state.width = 320;
      state.height = 240;
      state.interval = 1_000;
      state.stop = false;
      return state;
    });
  }

  setDImension() {
    return `${this.state.width};${this.state.height}`;
  }

  render() {
    const currentImage = images[this.state.counter];
    return /*#__PURE__*/React.createElement("div", {
      id: "divImage"
    }, /*#__PURE__*/React.createElement(Headline, {
      headline: images[this.state.counter].alt.toUpperCase()
    }), /*#__PURE__*/React.createElement(Image, {
      image: currentImage,
      dimension: this.setDImension()
    }), /*#__PURE__*/React.createElement(Controls, {
      stopImage: () => this.onHandleClick(),
      setWidth: () => this.onHandleSetWidth(),
      setHeight: () => this.onHandleSetHeight(),
      setReset: () => this.onHandleReset(),
      setInterval: () => this.onHandleSetInterval()
    }));
  }

}