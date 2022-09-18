const images = [
    {
        'src': '../../images/Theraphosa_Stirmi.png',
        'alt': 'Theraphosa Stirmi'
    },
    {
        'src': '../../images/Black_Thai_Scorpion.png',
        'alt': 'Black Thai Scorpion'
    },
    {
        'src': '../../images/Hamster.png',
        'alt': 'Campbell Hamster'
    },
    {
        'src': '../../images/Winkelspinne.png',
        'alt': 'Winkelspinne'
    },
    {
        'src': '../../images/Nosferatuspinne.png',
        'alt': 'Nosferatuspinne'
    }
];

class AllImages extends React.Component {
    constructor(props) {
        super(props);
    }

    onHandleReturnToMain() {
        window.location.href = "./index.html";
    }

    onHandleClick(item) {
        alert(item);
    }

    render() {
        return (
            <div>
                <div id="allImagesContainer">
                    {images.map((item) => {
                        return <img
                            src={item.src}
                            width="320"
                            height="240"
                            onClick={() => this.onHandleClick(item.alt)}
                        />
                    })}
                </div>

                <div style={{"text-align":"center"}}>
                    <button onClick={() => this.onHandleReturnToMain()}> Back </button>
                </div>
            </div>
        );
    }
}

const domTarget = document.querySelector('#all-images');
ReactDOM.render(<AllImages />, domTarget);