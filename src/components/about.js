import React, { Fragment } from "react"
import { object } from "prop-types"

import Header from "./header"
import Footer from "./footer"

const About = props => {
	return (
		<Fragment>
			<div>
				<Header />
				<div>
					<h2>About</h2>
					<p>
						ElixirRegex.com was intially created for the Phoenix Phrenzy contest
						to showcase Phoenix LiveView. It was something that I had wanted to
						make for a while while anyway, so this seemed like a perfect time
						with the perfect technology to create it. Hopefully you find it
						useful! I know I'll be using it regularly.
					</p>
					<p>-geoffrey</p>
				</div>
				<div className="columns mt-2">
					<div className="col_50">
						<h3 className="mb-0">Geoffrey Lessel</h3>
						<p className="mb-.25">
							<strong>made it work</strong>
						</p>
						<p>
							Geo is the author of Phoenix in Action, a developer at Planning
							Center and a wanna-be renaissance man. Catch his sweet tweets at{" "}
							<a
								href="https://twitter.com/geolessel"
								target="_blank"
								rel="noopener noreferrer"
							>
								@geolessel
							</a>
							. If you're ever in the San Diego area, hit him up!
						</p>
					</div>

					<div className="col_50">
						<h3 className="mb-0">Josh Wilkerson</h3>
						<p className="mb-.25">
							<strong>made it pretty</strong>
						</p>
						<p>
							Josh is a frontend designer/developer at Planning Center and lives
							in Franklin, TN. When he's not creating sparkling UI interfaces,
							you'll probably find him at one of the many BBQ or Hot Chicken
							joints in Nashville (or running to burn it all off). Also
							occasionally tweeting at{" "}
							<a
								href="https://twitter.com/jgwilkerson"
								target="_blank"
								rel="noopener noreferrer"
							>
								@jgwilkerson
							</a>
							.
						</p>
					</div>
				</div>
			</div>
			<Footer currentPath={props.location.pathname} />
		</Fragment>
	)
}

About.propTypes = {
	location: object,
}

export default About
