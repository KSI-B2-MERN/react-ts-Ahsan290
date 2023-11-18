// import style from '../src/index.css'
// import Azher from "./Pages/azher";
import Login from "./Pages/logIn";
import SignUP from "./Pages/signUp"

// import Logsign from "./Pages/logSign";
import Home from "./Pages/HomePg";

import {Routes, Route} from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUP/>}/>
          <Route path="/home" element={<Home/>}/>

          {/* <Route path="/azher" element={<Azher/>}/> */}


        </Routes>
        

    </>
  )
}

export default App
