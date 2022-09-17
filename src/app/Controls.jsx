export function Controls(props) {
    return (
        <div id="container">
            <button
                onClick={() => props.stopImage()}> Stop Image </button>
            <button
                onClick={() => props.setInterval()}> Set Interval </button>
            <button
                onClick={() => props.setWidth()}> Set Width </button>
            <button
                onClick={() => props.setHeight()}> Set Height </button>
            <button
                onClick={() => props.setReset()} > Reset </button>
        </div>
    );
}