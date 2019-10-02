import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import FullWidthTabs from "../components/fullwidthtabs"

const ServicePage = () => (
			<Layout>
			  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			  <SEO title="Services" />
				<div id="services-container">
					<Paper>
				  <h1 id="services-head">About Services</h1>	
					<h2>Personal Training for Functional Movement and Performance Fitness</h2>
					<span> {/*not surew why this is a span elem*/}
						<h3>Why Exercise?</h3>
						<p>Improve mood, regulate sleep, increase energy levels, resting metabolic rate for healthy weight 
 							maintenance, decrease your chances of contracting life threatening diseases and suffering from chronic pain, improve
 							mobility day to day, and the list goes on.</p>
 					</span>
					<FullWidthTabs />
					</Paper>
				</div>
			</Layout>
)

export default ServicePage

/*
About Services 
House call training and therapy 
Functional and performance fitness training 
Addressing muscle and joint pain/stiffness with techniques such as (click for more detail): 
Trigger point therapy: essentially, we are applying a localized pressure to the area that has increased tension. This will break up the adhesions in the muscle and fascia tissue by increasing circulation in the area. 
active release therapy: using trigger point therapy while getting the muscle to move in its natural plane of movement, this inhibits the mechanism that makes the muscle tense up,  
massage therapy: This will break up the adhesions in the muscle and fascia tissue by increasing circulation in the area when applying a steady pressure along the direction of the muscle fibres or transversely across them.  
assisted range of motion improvement: we can often improve range of motion by assisting the movement of the joint and applying a force that is opposite to the direction the muscle and joint are used to moving, this inhibits the muscle’s natural protective mechanism to resist a stretch.  
muscle activation: Pain is often from biomechanical errors that our bodies gradually develop. While release of the overworked muscles is important, activation of the weak areas are equally as important to improve movement patterns and reduce further pain and stiffness. 
Cupping : This will break up the adhesions in the muscle and fascia tissue by increasing circulation in the area.

*/