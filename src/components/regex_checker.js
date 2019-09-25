import React, { useState } from "react"

import Header from "./header"
import Form from "./form"
import Alert from "./alert"
import Results from "./results"
import Footer from "./footer"

const RegexChecker = () => {
	const [showAlert, setShowAlert] = useState(false)

	return (
		<div className="container">
			<div className="content">
				<Header />
				<Form />
				{showAlert && <Alert />}
				<Results />
				<Footer showAlert={showAlert} setShowAlert={setShowAlert} />
			</div>
		</div>
	)
}

export default RegexChecker
