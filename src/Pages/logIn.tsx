import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 
  
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onUsernameChange = (Username: string) => {
    setUsername(Username);
  };

  const onPasswordChange = (password: string) => {
    setPassword(password); 
  };

  const Login = async () => {
    
      const loginRes = await axios.post("http://localhost:3000/auth/login", {
        username: username,
        password: password,
      });

      if (loginRes.data) {
        navigate("/home");
      } else {
        alert("Incorrect username/password");
      }
   


  };  

  
  return (
    <>
      <div className="bg-white h-20 w-screen flex">
        <div className="flex align-center">
          <img
            className="p-5"
            src="https://assets.dukan.pk/demo/dtemp/store-logo1683037149_47073426628770.jpeg"
            alt=""
            width={90}
          />
        </div>
        <div className="flex items-center ">
          <p className="text-black font-bold">Knowledge Stream</p>
        </div>
      </div>

      <div className="h-screen w-screen text-black flex justify-center">
        <div className="bg-blue-400 w-screen flex flex-col items-center justify-center">
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-black flex justify-start">Login</h1>
            <p className="text-black">Provide your valid login credentials</p>

            <label className="mt-2">Username</label>
            <input
              className="rounded-md border-black border-2"
              type="text"
              required
              value={username}
              onChange={(e) => {
                void onUsernameChange(e.target.value);
              }}
            />

            <label>Password</label>
            <input
              className="rounded-md border-black border-2"
              type="password"
              required
              onChange={(e) => {
                void onPasswordChange(e.target.value);
              }}
            />
            <p className="text-black text-sm m-2">
            Not registered yet?{" "}
            <span
              className="text-blue-800 cursor-pointer hover:font-bold m-1"
              onClick={() => {
                navigate("/Signup");
              }}
            >
              {" "}
              Signup
            </span>
          </p>

          <div className="w-full flex flex-col mt-6 item-center ">
            <button
              disabled={!(username && password)}
              className="border-2 py-2 px-8 rounded-md w-32 bg-blue-500 text-white disabled:bg-gray-300 focus:outline-none"
              onClick={() => {
                void Login();
              }}
            >
              Login
            </button>
          </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Login;
