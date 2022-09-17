import { ImageChanger } from './app/ImageChanger.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <ImageChanger />
            </div>
        );
    }
}

const domTarget = document.querySelector('#app');
ReactDOM.render(<App />, domTarget);