export default function VideoPlayer(props) {
    const vidSrc = props.src;
    return (
        <div>
            <video src={vidSrc} controls={true}></video>
        </div>
    )
}