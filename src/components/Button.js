

function Button( {text, onHandleClick }) {
    return (
        <button onClick={onHandleClick}>{text}</button>
    )
}

export default Button