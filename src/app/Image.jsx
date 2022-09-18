export function Image(props) {
    return (
        <div>
            <img
                src={props.image.src}
                width={props.dimension.split(';')[0]}
                height={props.dimension.split(';')[1]}
            />
        </div>
    );
}