import { useState } from "react"
import ColorChanger from "./components/colorChanger"

function App() {
  
  const [color,setColor]=useState("olive")
  return (
    <>
      <ColorChanger/>
    </>
  )
}

export default App
