export function Copyright(props) {
    const style = {
        "font-size": screen.width > 390 ? "3rem" : "1rem"
    };

    return (
        <div>
            <h3 style={style}> {props.message} </h3>
        </div>
    );
}