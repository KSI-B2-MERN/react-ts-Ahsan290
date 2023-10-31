// import style from '../src/index.css'

import Login from "./Pages/log-in"
import SignUP from "./Pages/signUp"
// import Dashboard from "./Pages/dashBoard";
// import Logsign from "./Pages/logSign";
import Home from "./HomePg";

import {Routes, Route} from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="flex w-screen h-full bg-white justify-center items-center flex-col ">
        
       
       

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUP/>}/>
          <Route path="/home" element={<Home/>}/>

    </Routes>
{/* <Logsign/> */}
        
      </div>

    
    
   


   



    </>
  )
}

export default App
