import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FAQ from "../components/faq"
//so to be good, you just need parallax scrolling, responsive splash images, and show/hide animations

//so I want to add some kind of block to the right of both of those
//either with absolute positioning or 
//Certified Exercise Physiologist® with the Canadian Society for Exercise Physiology (CSEP)
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="hero">
      {heroImage()}
      <div class="heroText"><h1>Private training and kinesiotherapy sessions at your convenience, in pursuit of your goals, for your health.</h1></div>
    </div>
    <div class="belowHero">
      <div id="eishcontainer"> {/* Makes a small left aligned div */}
        <div id="eishport">
          <Image className="port"/>
          <h2> - Aleisia Arkley, BSc. Kinesiology, University of Calgary</h2>
        </div>
        <div id="eishport-text2">
          <p>Certified Exercise Physiologist® with the Canadian Society for Exercise Physiology</p>
          <p>Registered Kinesiologist with the Alberta Kinesiology Association</p>
        </div>
      </div>
      <h2>What is Kinesiology? </h2>
      <p>Simply put, kinesiology is the study of movement. Specializations can include anything under the umbrella of the anatomical, physiological and biomechanical relationships of movement in the human body.</p>
      <h2>Services</h2>
      <p>Chronic pain management • Improved Range of Motion and Balance • Managing Physical Limitations • Concussion Assessments and Management • Managing Chronic Diseases (Cardiovascular, Diabetes, Osteoarthritis etc.) • Weight Loss and Healthy Weight Maintenance • Core Conditioning and Strengthening • Resistance Training • Improved Quality of Movement and Technique • Fostering individual passion for daily active living</p>
      <FAQ/>
    </div>
  </Layout>
)

const heroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "yoga-hero.png"}) {
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

export default IndexPage



/*
  anotha one.
  slugline
  aleisia portrait. qualifications. right.
  blurb about kinesiotherapy
  treatments offered

  FAQ
  who can benefit
    information about these?

  About or bio on it's own page
  
  rates

  privacy policy on its own page

  **PHILOSOPHY SHOULD ALWAYS BE COMING THROUGH**
  one additional line so the file changes.
*/