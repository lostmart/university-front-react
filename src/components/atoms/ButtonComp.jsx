import PropTypes from "prop-types"

const ButtonComp = ({ btnText }) => {
	return <button>{btnText}</button>
}

ButtonComp.propTypes = {
	btnText: PropTypes.string.isRequired,
}

export default ButtonComp
