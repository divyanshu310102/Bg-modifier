import { useState } from "react"


function App() {

  let [color, setColor] = useState("olive")

  return(
    <>
    <div className=" w-full h-screen duration-200 flex flex-wrap justify-center items-center" style={{backgroundColor: color}}>

    <div className="mx-4 w-fit rounded-3xl px-3 py-2 flex justify-center fixed bottom-5 gap-3 bg-white">
        <button onClick={() => (setColor("black"))} className="w-auto justify-center px-2 py-1 bg-black rounded-2xl text-white shadow-xl outline-none">Black</button>
        <button onClick={() => (setColor("white"))} className="w-auto justify-center px-2 py-1 bg-white rounded-2xl outline-none shadow-xl">White</button>
        <button onClick={() => (setColor("pink"))} className="w-auto justify-center px-2 py-1 bg-pink-800 rounded-2xl outline-none shadow-xl">Pink</button>
        <button onClick={() => (setColor("orange"))} className="w-auto justify-center px-2 py-1 bg-orange-400 rounded-2xl outline-none shadow-xl">Orange</button>
        <button onClick={() => (setColor("yellow"))} className="w-auto justify-center px-2 py-1 bg-yellow-400 rounded-2xl outline-none shadow-xl">Yellow</button>
        <button onClick={() => (setColor("red"))} className="w-auto justify-center px-2 py-1 bg-red-800 rounded-2xl outline-none shadow-xl">Red</button>
        <button onClick={() => (setColor("green"))} className="w-auto justify-center px-2 py-1 bg-green-600 rounded-2xl outline-none shadow-xl">Green</button>
        <button onClick={() => (setColor("blue"))} className="w-auto justify-center px-2 py-1 bg-blue-800 rounded-2xl outline-none shadow-xl">Blue</button>
        <button onClick={() => (setColor("purple"))} className="w-auto justify-center px-2 py-1 bg-purple-800 rounded-2xl outline-none shadow-xl">Purple</button>
        <button onClick={() => (setColor("violet"))} className="w-auto justify-center px-2 py-1 bg-violet-800 rounded-2xl outline-none shadow-xl">Violet</button>
        <button onClick={() => (setColor("indigo"))} className="w-auto justify-center px-2 py-1 bg-indigo-800 rounded-2xl outline-none shadow-xl">Indigo</button>
        <button onClick={() => (setColor("cyan"))} className="w-auto justify-center px-2 py-1 bg-cyan-800 rounded-2xl outline-none shadow-xl">Cyan</button>
        <button onClick={() => (setColor("brown"))} className="w-auto justify-center px-2 py-1 bg-emerald-900 rounded-2xl outline-none shadow-xl">Emerald</button>
        
        <button onClick={() => (setColor("lime"))} className="w-auto justify-center px-2 py-1 bg-lime-200 rounded-2xl outline-none shadow-xl">Lime</button>
      </div> 
      

    </div>
    </>
  )
}

export default App
