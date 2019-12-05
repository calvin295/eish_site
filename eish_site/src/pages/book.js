import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

const BookPage = () => {
	return (
		<Layout>
			<SEO title="Calgary Based | Rehab in Motion | Book Appointment" description="Improve your health this year! take advantage of our injury rehab, prevention, and injury 
recovery strategies, personal training, and more today!"/>
			<div class="belowHero" id="book-container">
				<form name="contact" id="contact-form" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field" subject="Therapy Client Inquiry">
				<input type="hidden" name="form-name" value="contact" />
				<Paper style={{ marginTop: "15px", paddingTop: "10px", paddingBottom: "10px"}}>
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
				<Paper style={{ marginTop: "15px", paddingTop: "10px", paddingBottom: "10px" }}>
					<textarea
						name="inquiry"
						form="contact-form"
						placeholder="Describe the reason for your appointment"
					></textarea>
				</Paper>
				<Button  type="submit" variant="contained" style={{marginTop:"15px"}}>Submit</Button>
				</form>
			</div>
		</Layout>
	)
}

export default BookPage

//some kind of drop down.
//onsubmit send an email to aleisia about this.
