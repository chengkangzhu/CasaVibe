import React from "react";

const About = () => {
	return (
		<div className="about">
			<div className="website_container">
				<h2 className="h2 bold vibrant">What is CasaVibe About?</h2>
				<p className="subheading">Where Style Meets Convenience</p>
				<p className="description">
					Step into the world of CasaVibe, your premier destination
					for exquisite furniture that transforms your space into a
					haven of style and comfort.
				</p>
			</div>
			<div className="divider"></div>
			<div className="project_container">
				<h2 className="h2 bold subtle">
					Crafting the Future of Furnishing
				</h2>
				<p className="subheading">About this Project</p>
				<p className="description">
					CasaVibe isn't just a website; it's a passion project fueled
					by a commitment to redefine how you experience furniture
					shopping. We've carefully curated a collection from the IKEA
					API to bring you a seamless blend of functionality,
					aesthetics, and affordability.
				</p>
				<p className="description">
					Dive into a world where every piece tells a story, and your
					home becomes the canvas for your unique expression. From
					real-time availability updates to personalized
					recommendations, we've crafted CasaVibe with you in mind.
				</p>
			</div>
		</div>
	);
};

export default About;
