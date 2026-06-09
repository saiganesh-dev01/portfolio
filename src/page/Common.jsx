import ReactMarkdown from "react-markdown";
import "./common.css";

export default function Common({ content }) {
    return (
        <div className="markdown">
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </div>
    );
}