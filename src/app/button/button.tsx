const Button = (props: {onClick: () => void}) => {
    return (
        <button onClick={props.onClick}></button>
    )
}

export default Button;