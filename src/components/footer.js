import React from "react"
import { bool, func } from "prop-types"

const Footer = props => {
	return (
		<footer style={{ display: "flex", justifyContent: "space-between" }}>
			<span>&copy; 2019 Geoffrey Lessel</span>
			<span onClick={() => props.setShowAlert(!props.showAlert)}>
				toggle alert
			</span>
		</footer>
	)
}

Footer.propTypes = {
	showAlert: bool,
	setShowAlert: func,
}

export default Footer
