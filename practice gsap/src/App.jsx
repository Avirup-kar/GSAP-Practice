import './App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    useGSAP(() => {
        // Create a timeline so both animations are grouped
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".top",
                delay: 3,
                scroller: "body",
                start: "top 0%",
                end: "top -400%",
                scrub: 2,
                pin: true,
            }
        });

        tl.to('.first1', { 
            duration: 1,
            x: -1400,
            scale: 6,
            top:"20%",
            opacity: 5,
        },0) // start at same time
        
        tl.to('.first3', { 
            duration: 1,
            x: -1000,
            scale: 6,
            opacity: 5,
            top:"-20%",
            delay:0.28,
        },0) // start at same time

        .to('.first2', {
            duration: 1,
            x: -1200,
            scale: 6,
            opacity: 5,
            top:"100%",
            delay:0.14,
        }, 0) // start at same time

        tl.to('.second1', {
            duration: 1,
            x: 1400,
            scale: 6,
            top:"20%",
            opacity: 5,
        }, 0);

        tl.to('.second2', {
            duration: 1,
            x: 1200,
            scale: 6,
            opacity: 5,
            top:"100%",
            delay: 0.14,
        }, 0);

        tl.to('.second3', {
            duration: 1,
            x: 1400,
            scale: 6,
            top:"-20%",
            opacity: 5,
            delay:0.28,
        }, 0);
    });

  return (
    <>
    <div className='top w-fill bg-black flex justify-center'>
        <div className='w-1/2 h-screen relative'>
            <div className='first1 absolute top-[40%] right-[10%] w-[100px] opacity-0 h-[150px] bg-blue-300 rounded-lg shadow-lg flex items-center justify-center'></div>
            <div className='first2 absolute top-[50%] right-[10%] w-[150px] opacity-0 h-[100px] bg-pink-300 rounded-lg shadow-lg flex items-center justify-center'></div>
            <div className='first3 absolute top-[45%] right-[10%] w-[150px] opacity-0 h-[100px] bg-pink-500 rounded-lg shadow-lg flex items-center justify-center'></div>
        </div>
        <div className='w-1/2 h-screen relative rounded-lg'>
            <div className='second1 absolute top-[40%] left-[10%] w-[150px] h-[100px] opacity-0 bg-blue-400 rounded-lg shadow-lg flex items-center justify-center'></div>
            <div className='second2 absolute top-[50%] left-[10%] w-[150px] h-[100px] opacity-0 bg-pink-300 rounded-lg shadow-lg flex items-center justify-center'></div>
            <div className='second3 absolute top-[45%] left-[10%] w-[100px] h-[150px] opacity-0 bg-pink-600 rounded-lg shadow-lg flex items-center justify-center'></div>
        </div>
    </div>
    </>
  )
}

export default App
