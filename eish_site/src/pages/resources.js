import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"

const ResourcesPage = () => (
	<Layout>
		<SEO
			title="Physiology Resources"
			description="Sources detailing the efficacy of exercise therapy methods we
    use and the benefits of exercise for improving mental health and neurodegenerative disorders."
		/>
		<Paper elevation="1" id="paper" class="resources" style={{ marginBottom: "1.6em" }}>
			<h1>Resources</h1>

			<h4>Counselling and Exercise Prescription Sources</h4>
			<h5>CSEP Physical Activity Training for Health®</h5>
			<p></p>
			<h5>Advanced Fitness Appraisal and Exercise Prescription</h5>
			<p>
				Gibson, A. L., Wagner, D., & Heyward, V. (2018).{" "}<br/>
				<cite>Advanced Fitness Assessment and Exercise Prescription, 8E. </cite>
				Human kinetics.
			</p>

			<h4>Manual Therapy Technique Information</h4>
			<h5>Active Release Therapy - patent information</h5>
			<p>
				Leahy PM, Patterson T, inventors; Active Release Techniques, Llc,
				assignee. <br/>Expert system soft tissue active motion technique for release
				of adhesions and associated apparatus for facilitating specific
				treatment modalities. <br/>United States patent US 6,283,916. 2001 Sep 4.
			</p>
			<h5>Massage Therapy Studies</h5>
			<p>
				a) Hammer WI: Friction massage; from Functional soft tissue examination
				and treatment by manual methods. Gaithersberg: Aspen; 1999:463-478 <br/>b)
				Smith L. Acute inflammation: the underlying mechanism in delayed onset
				muscle soreness? Med Sci Sports Exerc 1991;23: 542-51 <br/>c) Jurch SE.
				Clinical Massage Therapy: Assessment and Treatment of Orthopedic
				Conditions. New York, McGraw-Hill, 2009 <br/>d) Cross friction massage.
				(2011, May 22). Physiopedia, . Retrieved 21:14, November 4, 2019 from
				<a href="https://www.physio-pedia.com/index.php?title=Cross_friction_massage&oldid=39077."> source</a>
			</p>
			<h5>Range of Motion Rehab Technique Studies</h5>
			<p>a) Gajdosik RL, Bohannon RW. Clinical measurement of range of motion: review of goniometry emphasizing reliability and validity. Physical therapy. 1987 Dec 1;67(12):1867-72.
				<br/>b) Magee DJ. Primary care assessment. In: Magee DJ, ed. <cite>Orthopedic Physical Assessment. 6th ed.</cite>St Louis, MO: Elsevier Saunders; 2014:chap 17 ''Limited range of motion.” 
			</p>
			<h5>Trigger Point Therapy Information</h5>
			<p>Trigger Points. (2018, June 27). Physiopedia, . Retrieved 21:36, November 4, 2019 from <a href="https://www.physio-pedia.com/index.php?title=Trigger_Points&oldid=192235.">source</a></p>
		</Paper>
	</Layout>
)

export default ResourcesPage
