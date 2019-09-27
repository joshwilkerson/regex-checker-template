import React from "react"
import { string, func, bool } from "prop-types"

const Checkbox = props => {
	const { value, id, label, size = "md", onChange, ...rest } = props

	return (
		<div {...rest}>
			<input
				type="checkbox"
				className={`checkbox checkbox-${size}`}
				id={id}
				value={value}
				checked={value}
				onChange={onChange}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

Checkbox.propTypes = {
	value: bool,
	id: string,
	label: string,
	size: string,
	onChange: func,
}

export default Checkbox
