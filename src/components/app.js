import React from "react"
import { BrowserRouter, Route, withRouter } from "react-router-dom"

import Container from "./container"
import RegexChecker from "./regex_checker"
import About from "./about"

const IndexPage = withRouter(props => <RegexChecker {...props} />)
const AboutPage = withRouter(props => <About {...props} />)

const App = () => {
	return (
		<BrowserRouter>
			<Container currentPath={location.pathname}>
				<Route path="/" exact component={IndexPage} />
				<Route path="/about/" component={AboutPage} />
			</Container>
		</BrowserRouter>
	)
}

export default App
