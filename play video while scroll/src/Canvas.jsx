import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger);

const Canvas = () => {
  const [index, setIndex] = useState({ value: 1 });
  const canvasRef = useRef();

  const getImagePath = (index) =>
    `/frams/frame_${String(index).padStart(4, "0")}.jpeg`;


  useGSAP(()=>{
    gsap.to(index, {
        value:382,
        // repeat:-1,
        ease:"linear",
        scrollTrigger:{
            trigger: "#canvas",
            scroller: "body",
            start: "top 0%",
            end: "top -500%",
            scrub: 2,
            pin: true,
        },
        onUpdate: ()=>{
            setIndex({ value:Math.round(index.value) })
        }
    })
})

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = new Image();
    img.src = getImagePath(index.value);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingQuality="high";
      context.imageSmoothingEnabled = true;
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [index]);

  return (
    <canvas
      className="w-full h-screen"
      ref={canvasRef}
      id="canvas"
    ></canvas>
  );
};

export default Canvas;