import React from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Collapsible from "react-collapsible"
import { useState } from "react"

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>{" "}
			{/*children here specifies html content inside the tabpanel*/}
		</Typography>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
}

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	}
}
const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		maxWidth: 650,
	},
}))

export default function FullWidthTabs({ startIndex }) {
	const classes = useStyles()
	const theme = useTheme()
	const [value, setValue] = React.useState(startIndex)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const handleChangeIndex = index => {
		setValue(index)
	}

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					aria-label="services tabs"
				>
					{/*tab headings*/}
					<Tab
						label="Chronic Pain Management & Acute Injury Rehab"
						{...a11yProps(0)}
					/>
					<Tab
						label="Maintenance Rehab & Training for Functional Performance"
						{...a11yProps(1)}
					/>
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<h3>Rehab Process</h3>
					<div class="belowHero">
						<p>
							Following our comprehensive movement assessment, we'll identify
							what is causing you pain or restricting your range of motion.
						</p>
						<p>
							For a therapist, the goal is often two-fold: relief, and
							prevention. We will use targeted treatments for pain or tension
							initially. Over time, strengthening imbalanced muscles and teasing
							out mobility from the joints can offer more permanent relief and
							prevent further injury.
						</p>
						<p>
							All assessments are based on CSEP’s standardized guidelines for
							functional fitness testing. Assessment scores will be compared to
							CSEP’s average data of healthy individuals your age and biological
							sex.
						</p>
						<p>
							This data will provide an objective baseline for us to maintain
							and build your functional health
						</p>
						<h3>Pain Management Therapies</h3>

						<p>
							All techniques offered are in use in certified clinical practice,
							and are backed by peer-reviewed research.
						</p>
						<Collapsible trigger="Assisted Range Of Motion Improvement">
							<p>
								We can often improve range of motion by assisting the movement
								of the joint and applying a force that is opposite to the
								direction the muscle and joint are used to moving, this inhibits
								the muscle’s natural protective mechanism to resist a stretch.
							</p>
						</Collapsible>
						<Collapsible trigger="Muscle Activation">
							<p>
								Pain is often from biomechanical errors that our bodies
								gradually develop. While release of the overworked muscles is
								important, activation of the weak areas are equally as important
								to improve movement patterns and reduce further pain and
								stiffness.
							</p>
						</Collapsible>
						<Collapsible trigger="Trigger Point Therapy">
							<p>
								Essentially, we are applying a localized pressure to the area
								that has increased tension. This will break up the adhesions in
								the muscle and fascia tissue by increasing circulation in the
								area.
							</p>
						</Collapsible>
						<Collapsible trigger="Massage Therapy">
							<p>
								This will break up the adhesions in the muscle and fascia tissue
								by increasing circulation in the area when applying a steady
								pressure along the direction of the muscle fibres or
								transversely across them.
							</p>
						</Collapsible>
						<Collapsible trigger="Active Release Therapy">
							<p>
								Using trigger point therapy while getting the muscle to move in
								its natural plane of movement, this inhibits the mechanism that
								makes the muscle tense up.
							</p>
						</Collapsible>
						<Collapsible trigger="Cupping">
							<p>
								This will break up the adhesions in the muscle and fascia tissue
								by increasing circulation in the area.
							</p>
						</Collapsible>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<h3>Training for Functional Performance</h3>
					<div id="sport-specific-div">
						<p>
							Fitness training is an important facet of recovering from any
							injury. We will design a training program to rebuild injured
							muscular or connective structures by working against gradually
							increasing loads or pushing the zone of proximal development in
							your range of motion for affected joints.
						</p>
						<p>
							Maintaining joint function is critical to avoid any further injury
							or chronic pain that can occur from repetitive use and motions
							that sports often demand. Common examples include: runner’s knee,
							jumper’s knee, tennis elbow, golfer’s elbow, carpal tunnel
							syndrome, shin splints, rotator cuff tendinitis, Achilles
							tendinitis and back pain.
						</p>
						<p>
							Successfully training for robust recovery and performance gains
							requires practicing movements combining specificity and
							variability. Over time, the successful trainee will follow a
							graduated progression of difficulty.
						</p>
						<h6>Specificity</h6>
						<p>
							Once joint function is assessed, we can test other attributes like
							range of motion, endurance, strength, flexibility, and aerobic
							capacity. From these assessments we can design a well-rounded,
							progressive training program to meet your performance goals.
							Programs with high specificity of locomotion to whatever sport you
							are training for. Examples of locomotion specific training are:
							jumping, sprinting, jogging and hopping. We will combine your
							locomotion specificity with addressing the terrain you perform on
							such as water, ground, air and ice.
						</p>
						<h6>Variability</h6>
						<p>
							Continuous performance gains also require variability in training.
							We design programs with progressive variability to avoid a plateau
							in your performance. Plateaus can happen from insufficient
							recovery and adaptation to overly-specific training. Cross
							training with other activities will help improve components of
							fitness that would otherwise plateau in your specific training
							program in addition to helping you recover. Sports also require
							multiple intervals of low to high intensity training for your
							cardiovascular fitness, and depending on the interval, you are
							using a different energy system for your muscles to work. We will
							integrate interval training to challenge all energy systems,
							including aerobic, anaerobic and phosphocreatine systems. Training
							each system will include a variety of longer periods of low
							intensity movements to short quick bursts of powerful agile
							movements.
						</p>
						<h6>Graduated Progression</h6>
						<p>
							Training in specific components of fitness also requires following
							the principle of overload for optimal performance. This means the
							training stimulus must be greater than the body is accustomed to.
							Keeping injury prevention in mind, it is important to
							progressively build the training stimulus to avoid overuse injury.
							Progression components include: frequency, intensity, duration and
							the number of repetitions and sets in a program. Your specific
							performance goals will dictate how we progress, for example:
							endurance improvement, strength improvement, speed improvement or
							muscle mass building. We will focus on improving your anaerobic
							lactate threshold which is important for any sport that requires a
							maximal effort at the go. This involves maximal intensity
							training.
						</p>
					</div>{" "}
					{/*tab content*/}
				</TabPanel>
			</SwipeableViews>
		</div>
	)
}
