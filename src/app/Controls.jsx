export function Controls(props) {

    const buttons = [
        {
            "name": "Stop Image",
            "event": () => props.stopImage()
        },
        {
            "name": "Add Image",
            "event": () => props.addImage()
        },
        {
            "name": "View all Images",
            "event": () => props.viewAllImages()
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
        },
        {
            "name": "About",
            "event": () => props.about()
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