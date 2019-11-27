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
					<Tab label="Daily Active Living" {...a11yProps(0)} />
					<Tab label="Pain Management & Injury Rehab" {...a11yProps(1)} />
					<Tab label="Performance Fitness Training" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<div>
						<h3>Build Motivation to Exercise</h3>
						<p>
							Despite the countless benefits of exercise, the tricky part is
							always staying consistent with an achievable plan that keeps you
							meaningfully engaged and challenged.
						</p>
						<p>
							I overcome this by taking the time to get to know you and
							understand your personal goals and interests are.
						</p>
						<p>
							We'll start with small changes and progress gradually, focusing on
							your priorities and what you enjoy
						</p>
						<p>
							From there, I provide exercise counselling informed by behaviour
							change theory models from exercise psychology research.
						</p>
						<h3>Maintain a Healthy Lifestyle</h3>
						<p>
							All assessments are based on CSEP’s standardized guidelines for
							functional fitness testing. Assessment scores will be compared to
							CSEP’s average data of healthy individuals your age and biological
							sex.
						</p>
						<p>
							This data will provide an objective baseline for us to maintain
							your functional health
						</p>
						<p>
							As the literature indicates, some age related decline in fitness
							is normal, however with the right activity, you can maintain your
							levels and even improve well into your 80’s. We can continually
							use the assessment data to make sure that you are not declining
							too rapidly.
						</p>
						<p>
							Finally, we can continue to set goals to keep you motivated to
							maintain your level you are at.
						</p>
						<h3>Improve Your Fitness</h3>
						<p>
							We will inspire you to improve yourself FOR yourself. Improve your
							self efficacy by boosting your confidence in your ability to
							succeed.
						</p>
						<p>
							We will aim to gradually increase your activity levels to make
							sure you are hitting the requirements to see the physiological
							health and mental wellness benefits of exercise.
						</p>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<h3>Pain Management & Injury Rehab</h3>
					<div class="belowHero">
						<p>
							By making a comprehensive assessment of how you are moving, we'll
							identify what is causing you pain or restricting your range of
							motion.
						</p>
						<p>
							Pain often comes from a biomechanical imbalance in the body: when
							segments of the joints and muscles are moving out of alignment, it
							can build tension in some muscles and the brains neurological
							system.
						</p>
						<p>
							We can start with a therapeutic approach, building functional
							exercises into your daily routine to help you accomplish your
							goals.{" "}
						</p>
						<h3>Pain Management Therapies</h3>
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
				<TabPanel value={value} index={2} dir={theme.direction}>
					<h3>Fitness Training</h3>
					<div id="sport-specific-div">
						<p>
							We can specifically test attributes like range of motion,
							endurance, strength, flexibility, and aerobic capacity, and design
							a well-rounded, progressive training program to meet your
							performance goals in these areas.
						</p>
						<p>
							All sports demand very specific components of our fitness: speed,
							power, agility and coordination. To improve these, We can
							integrate cross training with HIIT style workouts, as well as
							design programs with high specificity to whatever sport you are
							training for.
						</p>
						<p>
							Sports also require multiple intervals of low to high intensity
							training for your cardiovascular fitness, and depending on the
							interval, you are using a different energy system for your muscles
							to work. We will integrate interval training to challenge all energy
							systems.
						</p>
						<p>
							We will focus on improving your anaerobic lactate threshold which
							is important for any sport that requires a maximal effort at the
							go.
						</p>
					</div>{" "}
					{/*tab content*/}
				</TabPanel>
			</SwipeableViews>
		</div>
	)
}
