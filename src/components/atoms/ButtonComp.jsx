import PropTypes from "prop-types"

const ButtonComp = ({ btnText }) => {
	return <button className="btn">{btnText}</button>
}

ButtonComp.propTypes = {
	btnText: PropTypes.string.isRequired,
}

export default ButtonComp
