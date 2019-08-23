import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FAQ from "../components/faq"
//so to be good, you just need parallax scrolling, responsive splash images, and show/hide animations

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I offer private training and kinesio-therapy sessions at your convenience, in pursuit of your goals, for your health.</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <h2> - Aleisia Arkley, Certified Exercise Physiologist® with the Canadian Society for Exercise Physiology (CSEP)</h2>
    </div>
    <p>What is kinesiology? - Simply put, kinesiology is the study of movement. Specializations can include anything under the umbrella of the anatomical, physiological and biomechanical relationships of movement in the human body.</p>
    <h2>Services</h2>
    <p>Chronic pain management • Improving Range of Motion and Balance • Managing Physical Limitations and Strengthening • Concussion Assessments and Management • Managing Chronic Diseases (Cardiovascular, Diabetes etc.) • Weight Loss and Healthy Weight Maintenance • Core Conditioning and Strengthening • Resistance Training • Improved Quality of Movement and Technique • Fostering individual passion for daily active living</p>
    <p></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <FAQ />
    <Link to="/page-2/">Privacy Policy</Link>
  </Layout>
)

export default IndexPage

/*
  slugline
  aleisia portrait. qualifications.
  blurb about kinesio-therapy
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

