import axios from "axios"
import { useState } from "react";
import select from "react-select";
// import { useNavigate } from "react-router-dom";





  const onusernameChange = (Username: string) =>{
    setusername(Username)
  };

    const onPasswordChange = (password: string) =>{
      console.log(password); 
     };

     const login = async () => {
      const loginRes = await axios.post("http://localhost:3000/auth/login",{
        username: username,
        password: password,
      });
      if (loginRes.data){
        Navigate("/home");
      } else {
        alert("incorect username/password");
      }
     };

function Login() {
  const [username, SetUsername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  
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

      <label className="mt-2" >username</label>

      <input className="rounded-md border-black border-2" type="text"
      required
      value={username}
      onChange={(e) =>{
        void onUsernameChange(e.target.value);
      }}
      />


      <label className="">password</label>
      <input className="rounded-md border-black border-2" type="password" 
      required
      onChange={(e) =>{
        void onpasswordChange(e.target.value);
      }}
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
  
  export default Login;
  