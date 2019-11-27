import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Collapsible from "react-collapsible"

//maybe we don't need collapsibles on here we'll see.

const RatesPage = () => (
	<Layout>
		<SEO title="Rates" />
		<div class="below-port">
			<div class="rateblurb">
				<h3>
					<sup id="dollar">$</sup>
					<span id="amount">60</span>
					<span id="per-hour"> / 60 minutes</span>
				</h3>
				<h3>
					<sup id="dollar">$</sup>
					<span id="amount">85</span>
					<span id="per-hour"> / 90 minutes</span>
				</h3>
				<h3>
					<sup id="dollar">$</sup>
					<span id="amount">10 </span>
					<span id="per-hour">
						off per session when <br/> purchasing five or more sessions at once.
					</span>
				</h3>
				<p>Prices include GST</p>
				<p>
					First appointments require an assessment to establish objective and
					subjective baselines.{" "}
					<strong>
						It is recommended that a 90 minute appointment be made for the first
						time
					</strong>{" "}
					to have enough time to measure a baseline, establish goals and
					prescribe treatment and/or exercises.
				</p>
				<p>
					<strong>For those interested in pain management</strong> we will go
					through a series of range of motion measurements and muscle activation
					tests.
				</p>
				<p>
					<strong>For those who have fitness goals</strong>, depending on what
					they are, we will go through some strength and/or aerobic testing to
					determine what a safe, realistic starting point for those goals are.
				</p>
			</div>
			<Collapsible trigger="Does my insurance cover your services?">
				<p>
					Services are covered if you have a health and wellness spending
					account or coverage section for health and wellness under private
					providers.
				</p>
			</Collapsible>
			<Collapsible trigger="Do you provide direct billing?">
				<p>
					Unfortunately not yet, we are in the process of setting this up. You
					will receive invoices to provide your insurance company with.
				</p>
			</Collapsible>
		</div>
	</Layout>
)

export default RatesPage
