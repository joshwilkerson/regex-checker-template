import React from "react"
import Checkbox from "./checkbox"

const Form = () => {
	return (
		<section className="form">
			<div className="form-group">
				<label>Regex:</label>
				<input type="text" />
			</div>

			<div className="form-group">
				<label>Input:</label>
				<textarea></textarea>
			</div>

			<div className="d-f ai-c mb-1">
				<Checkbox
					id="checkbox-1"
					size="sm"
					label="a checkbox"
					className="mr-1 d-ib"
				/>

				<Checkbox
					id="checkbox-12"
					size="sm"
					label="another checkbox"
					className="mr-1 d-ib"
				/>
			</div>
		</section>
	)
}

export default Form
