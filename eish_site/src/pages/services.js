import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Collapsible from "react-collapsible"

const ServicePage = () => (
			<Layout>
			  <SEO title="Services" />
				<div id="services-container">
				  <h1 id="services-head">About Services</h1>	
					<h2>Personal Training for Functional Movement and Performance Fitness</h2>
					<span>
						<h3>Why Exercise?</h3>
						<p>Improve mood, regulate sleep, increase energy levels, resting metabolic rate for healthy weight 
 maintenance, decrease your chances of contracting life threatening diseases and suffering from chronic pain, improve
 mobility day to day, and the list goes on.</p>
 					</span>
					<div>
						<h3>Building Motivation to Exercise</h3>
						<p>Despite the countless benefits of exercise, the tricky part is always staying consistent with an achievable plan that keeps you meaningfully engaged and challenged.</p>
						<p>I overcome this by taking the time to get to know you and understand your personal goals and interests are.</p>
						<p>We'll start with small changes and progress gradually, focusing on your priorities and what you enjoy</p>
						<p>From there, I provide exercise counselling informed by behaviour change theory models from exercise psychology research.</p>
						<h3>Move Pain Free</h3>
						<p>We'll make a comprehensive assessment of how you are moving will help us identify what is causing the pain.</p>
						<p>Pain often comes from a biomechanical imbalance in the body: when segments of the joints and muscles are moving out of alignment, it can build tension in some muscles and the brains neurological system.</p>
						<p>We can start with a therapeutic approach, building functional exercises into your daily routine to help you accomplish your goals. </p>
						<h3>Maintain a Healthy Lifestyle</h3>
						<p>All assessments are based on CSEP’s standardized guidelines for functional fitness testing. Assessment scores will be compared to CSEP’s average data of healthy individuals your age and biological sex.</p>
						<p>This data will provide an objective baseline for us to maintain your functional health</p>
						<p>As the literature indicates, some age related decline in fitness is normal, however with the right activity, you can maintain your levels and even improve well into your 80’s. We can continually use the assessment data to make sure that you are not declining too rapidly.</p>
						<p>Finally, we can continue to set goals to keep you motivated to maintain your level you are at.</p>
						<h3>Improve Your Fitness</h3>
						<p>We will inspire you to improve yourself FOR yourself. 
							Improve your self efficacy by boosting your confidence in your ability to succeed.</p>
						<p>We will aim to gradually increase your activity levels to make sure you are hitting the requirements to see the physiological health and mental wellness benefits of exercise.</p>
						<h3>High Performance Fitness Training</h3>
						<div id="sport-specific-div">
							<h4>Target Sport-Specific Training</h4>
							<ul id="sport-specific-list">
								<li>Flexibility</li>
								<li>Range of Motion</li>
								<li>Strength</li>
								<li>Endurance</li>
								<li>Aerobic Capacity</li>
							</ul>
							<p>We can specifically test these attributes and design a well-rounded, progressive training program to meet your performance goals.</p>
							<p>Almost all sports require specific components of fitness: speed, power, agility and coordination. We can integrate cross training with 
								HIIT style workouts to improve speed, power, agility and coordination.</p>
							<p>Sports also require multiple intervals of low to high intensity training for your cardiovascular fitness, and depending on the interval, 
								you are using a different energy system for your muscles to work. We will integrate interval training to challenge all the systems.</p>
							<p>We will focus on improving your anaerobic lactate threshold which is important for any sport that requires a maximal effort at the go.</p>
						</div>					
					</div>
				  <h2>House Call Physical Therapy Techniques</h2>
					<div class="belowHero">
						<Collapsible trigger="Trigger Point Therapy">
							<p>Essentially, we are applying a localized pressure to the area that has increased tension. 
								This will break up the adhesions in the muscle and fascia tissue by increasing circulation in the area.</p>
						</Collapsible>
						<Collapsible trigger="Massage Therapy">
							<p>This will break up the adhesions in the muscle and fascia tissue by increasing circulation in the area 
								when applying a steady pressure along the direction of the muscle fibres or transversely across them.</p>
						</Collapsible>
						<Collapsible trigger="Active Release Therapy">
							<p>Using trigger point therapy while getting the muscle to move in its natural plane of movement, this inhibits 
								the mechanism that makes the muscle tense up.</p>
						</Collapsible>
						<Collapsible trigger="Cupping">
							<p>This will break up the adhesions in the muscle and fascia tissue by increasing circulation in the area.</p>
						</Collapsible>
						<Collapsible trigger="Assisted Range Of Motion Improvement">
							<p>We can often improve range of motion by assisting the movement of the joint and applying a force that is opposite 
								to the direction the muscle and joint are used to moving, this inhibits the muscle’s natural protective mechanism to resist a stretch.</p>
						</Collapsible>
						<Collapsible trigger="Muscle Activation">
							<p>Pain is often from biomechanical errors that our bodies gradually develop. While release of the overworked muscles is important, activation 
								of the weak areas are equally as important to improve movement patterns and reduce further pain and stiffness.</p>
						</Collapsible>
					</div>
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