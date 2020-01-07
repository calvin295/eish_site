import React from "react"
import { Link, useStaticQuery, graphql, navigate, useEffect } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FAQ from "../components/faq"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

import { TiSocialInstagram } from "react-icons/ti"
import { FaFacebookSquare } from "react-icons/fa"
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
    <SEO
      title="Calgary Injury Rehab | Personal Training"
      description="Injury Rehab and Exercise Therapy, bringing treatment and recovery to you. 
Get in touch to share about your injury or fitness goals."
    />
    <div class="hero">{/*stretchImages("yoga-hero-dark.png")*/}</div>
    <div class="heroText">
      <h1>
        Kinesiotherapy and Personal Training sessions in pursuit of your goals,
        for your health, at your convenience.
      </h1>
      <br />
      <br />
      <Button id="CTA" variant="contained" color="primary" href="/book/" size="large">
        Get Care Fast
      </Button>
    </div>
    <div class="belowHero">
      <div id="eishcontainer">
      <div id="socials">
          <a href="https://www.instagram.com/rehab.in.motion/" target="_blank" title="Instagram Icon Link"><TiSocialInstagram id="insta" size="50"/></a>
          <a href="https://www.facebook.com/Rehab-In-Motion-108099270670210/" target="_blank" title="Facebook Icon Link"><FaFacebookSquare id="fb" size="42" /></a>
        </div>
        {" "}
        {/* Makes a small left aligned div */}
        <div id="eishport">
          {stretchImages("aleisia-kinesiologist.png")}
          <h2>
            {" "}
            - Aleisia Arkley <br />
            BSc. Kinesiology <br />
            University of Calgary
          </h2>
        </div>
        
      </div>
      <div id="eishport-text2">
          <span id="highlight-1">
            <p>
              Certified Exercise Physiologist® with the Canadian Society for
              Exercise Physiology
            </p>
            <p>
              Registered Kinesiologist with the Alberta Kinesiology Association
            </p>
          </span>
        </div>
      <Paper
        elevation="4"
        classes={{ root: "below-port" }}
        id="marginUp"
        style={{ marginBottom: "1.6em" }}
      >
        <br />
        {/*make paper skinnier*/}
        <div class="below-port" id="marginUp">
          <h2>What is Kinesiotherapy?</h2>
          <p style={{ fontSize: "1.3rem" }}>
            Kinesiotherapists make use of medical research to guide
            rehabilitation and prevent injury, lifestyle diseases, and other
            physiological conditions related to painful or restricted movement.{" "}
          </p>
        </div>
      </Paper>
      <h2 style={{marginTop: "3rem"}}>What do Kinesiotherapists Do?</h2>
      <div
        style={{ display: "flex", flexFlow: "row wrap", fontSize: "1.3rem" }}
      >
        <div class="serve-i">
          Manage Chronic Disease
          <br />
          Manage Physical Limitations
          <br />
          Concussion Assessments and Recovery
          <br />
        </div>
        <div class="serve-i">
          Weight Loss and Body Recomposition <br />
          Core Strengthening <br />
          Resistance Training <br />
        </div>
        <div class="serve-i d">
          Improve Quality of Movement
          <br />
          Improve Range of Motion and Balance
          <br />
          Foster Passion for Daily Active Living <br />
        </div>
      </div>
      <Paper elevation="4" style={{ marginBottom: "1.6em" }}>
        <div class="trainingImage">
          {stretchImages("joint-mobilization.jpg")}
          {/*stretchImages("sports-massage.jpg")*/}
        </div>
        <div class="below-port">
          <Link to="/services/#top" className="bodyLink" state={{ index: 1 }}>
            <h3>Rehab Therapy Services</h3>
          </Link>
          <div id="rehab-port">
            <div id="left-hab">{stretchImages("injury-free.png")}</div>
            <div id="right-hab">
              <p>
                By making a comprehensive assessment of how you are moving,
                we'll identify what is causing you pain or restricting your
                range of motion.
                <br />
                <br />
                Pain often comes from a biomechanical imbalance in the body:
                when segments of the joints and muscles are moving out of
                alignment, it can build tension in some muscles and the brain's
                neurological system.
                <br />
                <br />
                We can start with a therapeutic approach aimed at relief
                initially, while over time building functional exercises into
                your daily routine to help you move like new.
              </p>
            </div>
          </div>
        </div>
      </Paper>
      <Paper elevation="4" style={{ marginBottom: "1.6em" }}>
        <div class="below-port">
          <Link to="/services/#top" className="bodyLink" state={{ index: 2 }}>
            <h3>Personal Training & Assessment</h3>
          </Link>
          <div id="train-port">
            <div id="left-train">

              <p>
                For performance and sport specific training, we know that all
                sports require specific components of fitness: speed, power,
                agility and coordination. We'll test these components
                specifically to establish your baselines, then design a
                well-rounded program to net results in those specific areas,
                focusing on proper technique and a mindful approach to training.
              </p>
              <p>
                Want to make a regular habit of exercise, but are having trouble
                motivating? No problem! <br/><br/>Together we will boost your confidence
                in your ability to succeed. Our aim will be to gradually
                increase your activity levels to make sure you are hitting the
                requirements to see the physiological health and mental wellness
                benefits of exercise. 
              </p>
            </div>
            <div id="right-train">{stretchImages("hiit-silhouette.png")}</div>
          </div>
        </div>
      </Paper>
      <h3>Model of Care</h3>
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
