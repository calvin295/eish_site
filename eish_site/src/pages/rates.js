import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Collapsible from "react-collapsible"	

//maybe we don't need collapsibles on here we'll see.

const RatesPage = () => (
	<Layout>
		<SEO title="Rates"/>
		<div class="rateblurb">
			<h2>
				60 min- 60$ 
				90 min-  85$
				Packages: save 10$ per session when purchasing a minimum of 5 sessions or more at once 
				All prices include GST 
			</h2>
		</div>
		<Collapsible trigger="Does my insurance cover your services?">
			<p>Services are covered if you have a health and wellness spending account or coverage section for health and wellness under private providers.</p>
		</Collapsible>
		<Collapsible trigger="Do you provide direct billing?">
			<p>Unfortunately not yet, we are in the process of setting this up. You will receive invoices to provide your insurance company with.</p>
		</Collapsible>
	</Layout>
)

export default RatesPage