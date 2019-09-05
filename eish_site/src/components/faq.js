import React from "react"
import Collapsible from "react-collapsible"
//state visible true/false I guess? Maybe not.
//kind of garbage but its ok.
const FAQ = () => {
	return (
		<div>
			<Collapsible trigger="Availability & Access">
				<p>We care deeply about our patients access to treatment and overall quality of life. As such we are available for same-day appointments seven days a week, 7AM to 8PM. Allowing you to get the care you need when you need it.</p>
			</Collapsible>
			<Collapsible trigger="Supporting Your Goals">
				<p>From our first appointment, we will explore your functional movement or performance training goals, measure your baseline, and build a progressive, actionable plan that you can execute consistently.</p>
			</Collapsible>
			<Collapsible trigger="Research Backed Methods">
				<p>All treatments we offer are in use in certified clinical practice, and are backed by peer-reviewed research. You can delve into this research on our resources page.</p>
			</Collapsible>
			<Collapsible trigger="Benefit from Broad Therapeutic Experience">
				<p>Your kinesiologist has multiple years of clinical experience with injury and stroke rehabilitation as well as functional movement training. Aleisia currently works as the lead kinseiologist at a multidisciplinary physician's office called Advanced Primary Care. Further, she is a certified exercise physiologist and comes from a competitive sports background. Read her bio to learn more.</p>
			</Collapsible>
		</div>
	)
}

export default FAQ