import sample from "../content/images/sample.jpg"
import "./projects.css"
export default function Projects(){
	return(
		<div id="projects">
		<div className="project">
			<img src={sample} className="project-cover" alt="Sample"></img>
			<div className="project-info">
				<h3>Sample</h3>
				<div id="status">
					<p>2026</p>
					<p>Active</p>
				</div>
			</div>
		</div> 
		</div>
	)
}
