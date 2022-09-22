import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Collapsible from "react-collapsible"
import Paper from "@material-ui/core/Paper"

//maybe we don't need collapsibles on here we'll see.

const RatesPage = () => (
	<Layout>
		<SEO
			title="Calgary Kinesiotherapy | Rehab in Motion | Rates"
			description="House-call injury therapy, sports medicine, training, and wellness specialist starting at 
$60 / session."
		/>
		<Paper
			elevation="12"
			classes={{ root: "below-port" }}
			style={{ marginBottom: "1.6em" }}
		>
			<div class="rateblurb">
				<p>
					<strong>
						First appointments require an assessment to establish objective and
						subjective baselines.{" "}
					</strong>{" "}
					It is recommended that a 90 minute appointment be made for the first
					time so we have enough time to measure a baseline, establish goals and
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
			<div id="rate">
				<h3>
					<sup id="dollar">$</sup>
					<span id="amount">90</span>
					<span id="per-hour"> Initial consult</span>
				</h3>
				<h3>Subsequent Sessions:</h3>
				<h3>
					<sup id="dollar">$</sup>
					<span id="amount">90</span>
					<span id="per-hour"> / 60 minutes</span>
				</h3>
				<h3>
					<sup id="dollar">$</sup>
					<span id="amount">120</span>
					<span id="per-hour"> / 90 minutes</span>
				</h3>
				<h3>
					<span id="per-hour">
						Package pricing available at lower per-session rates
					</span>
				</h3>
				<p>Prices include GST</p>
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
		</Paper>
	</Layout>
)

export default RatesPage
