import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import FullWidthTabs from "../components/fullwidthtabs"
import Img from "gatsby-image"
import {useStaticQuery} from "gatsby"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "peace-bridge.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.image.childImageSharp.fluid} />
}

const ServicePage = ({location}) => {
	if(typeof window !== 'undefined') {
		if(location.state === null && {location}.toString() === "[object Object]") {
					location = {state: {
						index: 0
				}}
			}
	}
	return (<Layout>
			  <SEO title="Injury Recovery | Rehab in Motion | Personal Training" description="Therapy for joint, muscle, and back pain including massage, trigger point therapy,
Personal Training, improved range of motion, strength, and wellness."/>
			  <div id="service-hero">
			 		{Image()}
			 		<div class="heroText">
			 			<h1><span id="highlight">Services</span></h1>
			 		</div>
				 </div>
				<div id="services-container">
 					<Paper>
 						<div id="paper" class="tab-container">
 						{/* can put an image before this. or another swipeable tabs with hidden muiroot element that gets state from thia one?*/
							<FullWidthTabs startIndex={location.state !== null && typeof location.state !== 'undefined' ? location.state.index : 0} />
 						}
						</div>
					</Paper>
				</div>
			</Layout>)
} 

export default ServicePage



	

//

/*


React.useEffect(() => {
			if(location.state === null && {location}.toString() === "[object Object]") {
				location = {state: {
					index: 0
				}}
			}
		}, [])


if(location.state === null && {location}.toString() === "[object Object]") {
				location = {state: {
					index: 0
				}}
			}

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