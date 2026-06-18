import "./footbar.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footbar(){
	return(
		<div id="footbar">
			<div>© SAI GANESH 2026</div>
			<div>No AI is used, even for writing.</div>
			<div id="links">
				<a className="link" href="https://github.com/saiganesh-dev01" target="_blank"><FaGithub /></a>
				<a className="link" href="https://linkedin.com/in/saiganeshdev01" target="_blank"><FaLinkedin /></a>
				<a className="link" href="mailto:saiganesh.dev01@gmail.com" target="_blank"><FaEnvelope /></a>
			</div>
		</div>
	)
}

