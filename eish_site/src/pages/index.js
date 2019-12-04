import React from "react"
import { Link, useStaticQuery, graphql, navigate, useEffect } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FAQ from "../components/faq"
import Paper from "@material-ui/core/Paper"
//

//Need a good metadescription for everything. use keywords you want to rank for, Declarative, active voice, call to action,
//do the query once when the page loads.
const imagequery = () => {
  data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)
}
var data

const IndexPage = () => (
  <Layout>
    {imagequery()}
    <SEO title="Kinesiotherapy" description=" " />
    <div class="hero">
      {/*stretchImages("yoga-hero-dark.png")*/}
    </div>
    <div class="heroText">
        <h1>
          Kinesiotherapy and Personal Training sessions in pursuit of your
          goals, for your health, at your convenience.
        </h1>
      </div>
    <div class="belowHero">
      <div id="eishcontainer">
        {" "}
        {/* Makes a small left aligned div */}
        <div id="eishport">
          {stretchImages("aleisia-kinesiologist.png")}
          <h2> - Aleisia Arkley, <br/>BSc. Kinesiology, <br/>University of Calgary</h2>
        </div>
        <div id="eishport-text2">
          <span id="highlight-1"><p>
            Certified Exercise Physiologist® with the Canadian Society for
            Exercise Physiology
          </p>
          <p>
            Registered Kinesiologist with the Alberta Kinesiology Association
          </p></span>
        </div>
      </div>
      <Paper  elevation="12" classes={{root: "below-port"}} id="marginUp" style={{ marginBottom: "1.6em" }}>
        <br />
        {/*make paper skinnier*/}
        <div class="below-port" id="marginUp">
          <h2>What is Kinesiology?</h2>
          <p>
            Simply put, kinesiology is the study of movement. Specializations
            can include anything under the umbrella of the anatomical,
            physiological and biomechanical relationships of movement in the
            human body. More practically, kinesiology utilizes scientific
            research to make assessments to aid in the enhancement of human
            performance, such as sport or work environments and to assist in the
            prevention or rehabilitation of injury, lifestyle diseases and other
            physiological conditions.{" "}
          </p>
        </div>
      </Paper>
      <Paper style={{ marginBottom: "1.6em" }}>
        <div class="trainingImage">
          {stretchImages("joint-mobilization.jpg")}
          {/*stretchImages("sports-massage.jpg")*/}
        </div>
        <div class="below-port">
          <Link to="/services/#top" className="bodyLink" state={{ index: 1 }}><h3>Rehab Therapy Services</h3></Link>
          <div id="rehab-port">
            <div id="left-hab">
              {stretchImages("injury-free.png")}
            </div>
            <div id="right-hab">
              <p>
                Chronic Pain Management • Improved Range of Motion and Balance •
                Managing Physical Limitations • Concussion Assessments and
                Management • Managing Chronic Diseases (Cardiovascular,
                Diabetes, Osteoarthritis etc.) • Weight Loss and Healthy Weight
                Maintenance • Core Conditioning and Strengthening • Resistance
                Training • Improved Quality of Movement and Technique •
                Fostering Passion for Daily Active Living
              </p>
              <p>
                Whether your goals are for performance or pain management, We
                perform a functional movement assessment. Often, MOBILITY is as
                important as strength with regard to your performance goals.
                Especially if you have previous injuries, pain, or play a sport
                requiring repetitive movement and joint stress. TECHNIQUE IS KEY
                to optimal performance and staying pain free alike.
              </p>
            </div>
          </div>
        </div>
      </Paper>
      <Paper elevation="4"style={{ marginBottom: "1.6em" }}>
        <div class="below-port">
          <Link to="/services/#top" className="bodyLink" state={{ index: 2 }}><h3>Personal Training & Assessment</h3></Link>
          <div id="train-port">
            <div id="left-train">
              <p>
                Want to make a regular habit of exercise, but are having trouble
                motivating? No problem! Together we will boost your confidence
                in your ability to succeed. Our aim will be to gradually
                increase your activity levels to make sure you are hitting the
                requirements to see the physiological health and mental wellness
                benefits of exercise.
              </p>
              <p>
                For performance and sport specific training, we know that all
                sports require specific components of fitness: speed, power,
                agility and coordination. We'll test these components
                specifically to establish your baselines, then design a
                well-rounded program to net results in those specific areas,
                focusing on proper technique and a mindful approach to training.
              </p>
            </div>
            <div id="right-train">
              {stretchImages("hiit-silhouette.png")}
            </div>
          </div>
        </div>
      </Paper>

      <FAQ />
    </div>
  </Layout>
)
/*
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
*/
/* Easy optimization, separate file structure into full width fluid images and fixed width.
   Then
   var data

*/

var stretchImages = imgName => {
  var tempArr = data.allImageSharp.edges.filter(
    edge => edge.node.fluid.originalName === imgName
  )
  return <Img fluid={tempArr.shift().node.fluid} />
}

export default IndexPage

/*

src
              srcSet
              base64
              aspectRatio
              originalImg
              sizes     
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
