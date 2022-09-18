export function Image(props) {
    var dimension = props.dimension.split(';');
    return (
        <div>
            <img 
                id="imageContainer"
                src={props.image.src}
                width={dimension[0]}
                height={dimension[1]}
            />
        </div>
    );
}