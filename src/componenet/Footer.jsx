import "./footer.css"

export default function Footer() {
    return (
        <div id="footer">
            <h5> {new Date().getFullYear()} Sai Ganesh</h5>
            <div id="social-links">
                <a href="https://github.com/saiganesh-dev01" target="_blank">Github</a>|
                <a href="https://github.com/saiganesh-dev01" target="_blank">LinkedIn</a>|
                <a href="https://github.com/saiganesh-dev01" target="_blank">Twitter</a>|
                <a href="https://github.com/saiganesh-dev01" target="_blank">Mail</a>
            </div>
        </div>
    )
}