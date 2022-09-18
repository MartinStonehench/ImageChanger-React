export function Controls(props) {

    const buttons = [
        {
            "name": "Stop Image",
            "event": () => props.stopImage()
        },
        {
            "name": "Set Interval",
            "event": () => props.setInterval()
        },
        {
            "name": "Set Width",
            "event": () => props.setWidth()
        },
        {
            "name": "Set Height",
            "event": () => props.setHeight()
        },
        {
            "name": "Reset",
            "event": () => props.setReset()
        }
    ];

    return (
        <div id="container">
            {buttons.map((item) => {
                return (
                    <div>
                        <button onClick={item.event}> {item.name} </button>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}