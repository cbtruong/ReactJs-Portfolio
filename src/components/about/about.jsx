import React from "react";
import "./about.css";
import AboutImg from "../../assets/hero.jpg";
import Info from "./Info.jsx";
import CV from "../../assets/CV.pdf";

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section_title">About Me</h2>
			<span className="section_subtitle">My introduction</span>

			<div className="about_container container grid">
				<img src={AboutImg} alt="" className="about_img" />
				<div className="about_data">
					<Info />
					<p className="about_description">
						Frontend developer, I create web pages with UI / UX user
						interface, I have years of experience and many clients
						are happy with the projects carried out.
					</p>
                    <a href={CV} download="" className="button button--flex">
                        Download CV
                    </a>
				</div>
			</div>
		</section>
	);
};

export default About;
