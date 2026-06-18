import { useEffect, useRef } from "react";
import "./canvas.css"

export default function Barnsley() {
        const canvasRef = useRef(null);

        useEffect(() => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");

                function resize() {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                }

                resize();

                function animate() {
			ctx.fillStyle = "#A7C080"

                        requestAnimationFrame(animate);
                }

                animate();

                return () => {
                        window.removeEventListener("resize", resize);
                };
        }, []);

        return <canvas ref={canvasRef} id="canvas" />;
}
