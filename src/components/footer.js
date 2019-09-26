import React from "react"
import { Link } from "react-router-dom"
import { string } from "prop-types"

const Footer = props => {
	return (
		<footer>
			<nav>
				{props.currentPath === "/" ? (
					<Link to="/about/">About</Link>
				) : (
					<Link to="/">Home</Link>
				)}
			</nav>
			<p>&copy; 2019 Geoffrey Lessel</p>
		</footer>
	)
}

Footer.propTypes = {
	currentPath: string,
}

export default Footer
