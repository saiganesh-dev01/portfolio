import "./contact.css"
export default function Contact(){
	return(
		<div className="contact">
			<h1>Contact</h1>
			<h3>Email me at <a href="mailto:saiganesh.dev01@gmail.com<" rel="ext">saiganesh.dev01@gmail.com</a> OR Message on <a href="https://linkedin.com/in/saiganeshdev01" target="_blank">Linkedin</a>. ~ (Prefered)</h3>
			<br />
			OR
			<br />
			<input type="text" placeholder="Enter Your Name" id="name" />
			<input type="text" placeholder="Enter Your Mail" />
			<textarea placeholder="Descrription" cols="30" rows="5" />
			<button type="submit" id="submit-btn">Send It!</button>
		</div>
	)
}
