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
				<p>
					First appointments require an assessment to establish objective and
					subjective baselines. It is recommended that a 90 minute appointment
					be made for the first time to have enough time to measure a baseline,
					establish goals and prescribe treatment and/or exercises. For those
					interested in pain management we will go through a series of range of
					motion measurements and muscle activation tests. For those who have
					fitness goals, depending on what they are, we will go through some
					strength and/or aerobic testing to determine what a safe, realistic
					starting point for those goals are.
				</p>
				<h2>
					<span id="dollar">$</span>
					<span id="amount">60</span>/<span id="per-hour">hr</span>
				</h2>
				<h2>
					<span id="dollar">$</span>
					<span id="amount">50</span>/
					<span id="per-hour">hr thereafter</span>
				</h2>
				<h3>
					Save 10$ per session when purchasing five or more sessions at once
				</h3>
				<h4>All prices include GST</h4>
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
