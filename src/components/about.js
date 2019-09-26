import React, { Fragment } from "react"
import { obj } from "prop-types"

import Footer from "./footer"

const About = props => {
	return (
		<Fragment>
			<div>
				<h1>About Page</h1>
				<p>Some about content goes here</p>
			</div>
			<Footer currentPath={props.location.pathname} />
		</Fragment>
	)
}

About.propTypes = {
	location: obj,
}

export default About
