import ReactMarkdown from "react-markdown"
import "./md.css"
export default function Md({content}){
	return(
		<div className="markdown">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	)
}
