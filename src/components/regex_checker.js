import React, { Fragment } from "react"
import { object } from "prop-types"

import Header from "./header"
import Form from "./form"
import Alert from "./alert"
import Results from "./results"
import Footer from "./footer"

const RegexChecker = props => {
	return (
		<Fragment>
			<div>
				<Header />
				<Form />
				<Alert />
				<Results />
			</div>

			<Footer currentPath={props.location.pathname} />
		</Fragment>
	)
}

RegexChecker.propTypes = {
	location: object,
}

export default RegexChecker
