import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
	const sendForm = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		console.log(sendForm.current.elements.name.value);

		emailjs
			.sendForm("service_8w7ns7p", "template_re427g3", sendForm.current, {
				publicKey: "BHVwMzP0njEMptNol",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section className="contact section" id="contact">
			<h2 className="section_title">Get in touch</h2>
			<span className="section_subtitle">Contact Me</span>

			<div className="contact_container container grid">
				<div className="contact_content">
					<h3 className="contact_title">Talk to me</h3>
					<div className="contact_info">
						<div className="contact_card">
							<i className="bx bx-mail-send contact_card-icon"></i>
							<h3 className="contact_card-title">Email</h3>
							<span className="contact_card-data">
								user@gmail.com
							</span>
							<a href="" className="contact_button">
								Write me
								<u className="bx bx-right-arrow-alt contact_button-icon"></u>
							</a>
						</div>

						<div className="contact_card">
							<i className="bx bxl-whatsapp contact_card-icon"></i>
							<h3 className="contact_card-title">Whatsapp</h3>
							<span className="contact_card-data">
								999-888-777
							</span>
							<a href="" className="contact_button">
								Write me
								<u className="bx bx-right-arrow-alt contact_button-icon"></u>
							</a>
						</div>

						<div className="contact_card">
							<i className="bx bxl-messenger contact_card-icon"></i>
							<h3 className="contact_card-title">Message</h3>
							<span className="contact_card-data">
								user.fb123
							</span>
							<a href="" className="contact_button">
								Write me
								<u className="bx bx-right-arrow-alt contact_button-icon"></u>
							</a>
						</div>
					</div>
				</div>

				<div className="contact_content">
					<h3 className="contact_title">Write me your project</h3>
					<form ref={sendForm} onSubmit={sendEmail} className="contact_form">
						<div className="contact_form-div">
							<label className="contact_form-tag">Name</label>
							<input
								type="text"
								name="name"
								className="contact_form-input"
								placeholder="Insert your name"
							/>
						</div>

						<div className="contact_form-div">
							<label className="contact_form-tag">Mail</label>
							<input
								type="email"
								name="email"
								className="contact_form-input"
								placeholder="Insert your email"
							/>
						</div>

						<div className="contact_form-div contact_form-area">
							<label className="contact_form-tag">Project</label>
							<textarea
								name="project"
								cols="30"
								rows="10"
								className="contact_form-input"
								placeholder="Write your project"
							></textarea>
						</div>
						<button href="#contact" className="button button--flex">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
