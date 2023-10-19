
// import style from '../src/index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className=" h-screen w-screen  bg-red-300 flex flex-col justify-center items-center">

<div className=" bg-red-500 w-1/4 flex flex-col justify-center items-center ">
   
    <h1 className="text-2xl font-bold ">Login</h1>
    {/* <p className="text-3xl font-bold underline">Login</p>
    
    <h1 className="text-sm">Login</h1> */}
   

    <div className="  flex flex-col ">
    <label className="mt-2 " placeholder="Your name">
      Username
      
      </label>
    <input className="rounded-md border-black border-2" type="text"  />
    <label className="">Password</label>
    <input className="rounded-md border-black border-2" type="password" />
    </div>

    <div className="mt-4">
      <button>Login</button>
    </div>

    </div>
    </div>


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}



    </>
  )
}

export default App
