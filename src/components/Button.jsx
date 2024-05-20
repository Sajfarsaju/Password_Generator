const Button = ({ onClick, text, customeClass }) => {
    return (
        <button className={customeClass} onClick={onClick}>
            {text}
        </button>
    )
}
export default Button