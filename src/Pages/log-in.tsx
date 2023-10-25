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
      
      <div className="   h-screen w-screen text-black flex justify-center">
     <div className=" bg-blue-400 w-screen flex flex-col items-center justify-center">
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
  
      <div className="mt-4">
        <button>Login</button>
      </div>
  
      </div>
      </div>
  
      </>
    )
  }
  
  export default Login
  