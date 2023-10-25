// import style from '../src/index.css'
import Navbar from "./MyComponents/navbar"
import Login from "./Pages/log-in"
import SignUP from "./Pages/signUp"
import Dashboard from "./Pages/dashBoard"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex w-full h-full bg-white justify-center items-center flex-col">

        <Navbar></Navbar>
        <Login></Login>
        <SignUP></SignUP>
      </div>


      <div className="bg-red-100 mt-5 flex w-screen h-screen  flex-col ">
        <Dashboard></Dashboard>
      </div>
    
    
   


   



    </>
  )
}

export default App
