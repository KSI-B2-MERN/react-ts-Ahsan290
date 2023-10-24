// import style from '../src/index.css'
import Navbar from "./MyComponents/navbar"
import Login from "./Pages/log-in"
// import SignUP from "./Pages/signUp"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Login></Login>
    {/* <SignUP></SignUP> */}

    
    
    {/* <div className=" h-screen w-screen  bg-red-300 flex flex-col justify-center items-center">

<div className=" bg-red-500 w-1/4 flex flex-col justify-center items-center ">
   
    <h1 className="text-2xl font-bold ">Login</h1>
  
   

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
    </div> */}


   



    </>
  )
}

export default App
