import React from "react"

const Results = () => {
	return (
		<section className="results mt-1">
			<h2>Function Call:</h2>
			<pre className="mb-2">Regex.scan(~r/geo/iuf, "ge")</pre>
			<h2>Results</h2>
			<h3>Full:</h3>
			<p>
				<span>Geoff</span>rey is better than jeffery
			</p>
			<h3>Matches:</h3>
			<p>
				[0]: ge <br />
				[1]: g <br />
				[2]: je <br />
				[3]: j
			</p>
			<h3>Named Captures:</h3>
			<p>named => re</p>
		</section>
	)
}

export default Results
