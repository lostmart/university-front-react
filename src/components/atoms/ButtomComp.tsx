type ButtonCompProps = {
	btnText: string
}

const ButtonComp = ({ btnText }: ButtonCompProps) => {
	return <button className="btn">{btnText}</button>
}

export default ButtonComp
