

const Button = ({Button, setButton}) => {
    return(
        <button onClick={() => setButton(!Button)}>{Button === true} Submit</button>
    )
}

export default Button;
