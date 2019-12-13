import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import {
	FaHeartbeat,
	FaFileMedical,
	FaAward,
	FaCloudscale,
} from "react-icons/fa"

const BookPage = () => {
	return (
		<Layout>
			<SEO
				title="Calgary Based | Rehab in Motion | Book Appointment"
				description="Improve your health this year! take advantage of our injury rehab, prevention, and injury 
recovery strategies, personal training, and more today!"
			/>
			<div class="belowHero" id="book-container">
				<form
					name="contact"
					id="contact-form"
					method="post"
					action="/thanks/"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					subject="Therapy Client Inquiry"
				>
					<input type="hidden" name="form-name" value="contact" />
					<Paper
						elevation="4"
						style={{
							marginTop: "15px",
							paddingTop: "10px",
							paddingBottom: "10px",
						}}
					>
						<div id="book-container">
							<h5>Name *</h5>
							<input
								type="text"
								name="firstName"
								placeholder="First Name"
								required
							/>
							<input
								type="text"
								name="lastName"
								placeholder="Last Name"
								required
							/>
							<h5>Phone *</h5>
							<input
								type="tel"
								name="telephone"
								placeholder="Phone Number"
								required
							/>
							<h5>Email</h5>
							<input
								type="Email"
								name="emailAddr"
								placeholder="Email Address"
							/>
						</div>
					</Paper>
					<Paper
						elevation="5"
						style={{
							marginTop: "15px",
							paddingTop: "10px",
							paddingBottom: "10px",
						}}
					>
						<textarea
							name="inquiry"
							form="contact-form"
							placeholder="Describe the reason for your appointment"
						></textarea>
					</Paper>
					<Button
						id="CTA"
						type="submit"
						variant="contained"
						color="primary"
						style={{ marginTop: "15px" }}
					>
						Submit
					</Button>
				</form>
				<div class="grid_item a">
					<div class="box">
						<FaCloudscale size="128" color="rgba(80,80,80, 0.6)"/>
					</div>
					<h2>
						From our first appointment, we will explore your functional movement
						or training goals, measure your baseline, and build a progressive,
						actionable plan that you can execute consistently.
					</h2>
				</div>
				<div class="grid_item b" id="b">
					<div class="box">
						<FaFileMedical size="128" color="rgba(80,80,80, 0.8)"/>
					</div>
					<h2>
						All recovery techniques offered are in use in certified clinical
						practice, and are backed by peer-reviewed research.
					</h2>
				</div>
				<div class="grid_item c">
					<div class="box">
						<FaHeartbeat size="128" color="rgba(100,100,100, 0.9)"/>
					</div>
					<h2>
						Incremental improvements to your health are made by applying rehab
						and training plans consistently and intentionally.
					</h2>
				</div>
			</div>
		</Layout>
	)
}

export default BookPage

//some kind of drop down.
//onsubmit send an email to aleisia about this.
