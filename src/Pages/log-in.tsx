// import NavBar from "../MyComponents/navbar"

// import {usenavigate} from 'react-router-dom'

// import {useState, userState} from "react";

// function const Username: string
//   const [Username, SetUsername] = useState<string>("");

//   const onUsernameChange = (Username: string) =>{
//     SetUsername(Username)
//   };

//     const onPasswordChange = (password: string) =>{
//       console.log(password); 
//      };

function Login() {
  
    return (
      <>

  <div className="bg-white h-20 w-screen flex">
    
            <div className="flex align-center">
              <img className="p-5" src="https://assets.dukan.pk/demo/dtemp/store-logo1683037149_47073426628770.jpeg" alt=""  width={90}/>
            </div>
            
            <div className="flex  items-center ">
              <p className="text-black  font-bold">Knowledge Stream</p>
            </div>

              {/* <div className="flex justify-end w-full">
              <a href="" target="" rel="">
              <button  className="bg-blue-500 text-white mr-2"
            
              >Signup</button></a>
              </div> */}

          </div>


      {/* <NavBar/> */}
      <div className="   h-screen w-screen text-black flex justify-center">
        
     <div className=" bg-blue-400 w-screen flex flex-col items-center justify-center">
      <div>
        <img src="" alt="" />
      </div>

      <div className="flex flex-col">

      <h1 className=" text-black flex justify-start" >Login</h1>

      <p className=" text-black">Provide your Valid login credentials</p>

      <label className="mt-2" >Username</label>

      <input className="rounded-md border-black border-2" type="text"
      required
      // value={Username}
      // onChange={(e) =>{
      //   void onUsernameChange(e.target.value);
      // }}
      />


      <label className="">Password</label>
      <input className="rounded-md border-black border-2" type="password" 
      required
      // onChange={(e) =>{
      //   void onPasswordChange(e.target.value);
      // }}
      />
      </div>
          <p className="text-xs">If you new user firstly   <a href="" > Sign-Up</a></p>
      <div className="mt-4">
        <button>Login</button>
      </div>
  
      </div>
      </div>
  
      </>
    )
  }
  
  export default Login
  