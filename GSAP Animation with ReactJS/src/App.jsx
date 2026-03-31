import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

const App = () => {
const {contextSafe} = useGSAP()

 const boxref = useRef()

  const gsapfunction = contextSafe(() => {
    gsap.to(boxref.current, {
      rotate: 360,
      duration: 2,
    })
  })
  
  return (
    <main>
      <button onClick={gsapfunction}>Click</button>
      <div ref={boxref} className="box"></div>
    </main>
  )
}

export default App
