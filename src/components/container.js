import React from "react"
import { any, string } from "prop-types"

const Container = props => {
	return (
		<div className="container">
			<div className="content">{props.children}</div>
		</div>
	)
}

Container.propTypes = {
	children: any,
	currentPath: string,
}

export default Container
