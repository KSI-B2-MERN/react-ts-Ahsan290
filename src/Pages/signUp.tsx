

function signUP() {
  
    return (
      <>
      <div className=" h-screen w-screen  bg-red-300 flex flex-col justify-center items-center">
  
  <div className=" bg-blue-500 w-1/4 flex flex-col justify-center items-center ">
     
      <h1 className="text-2xl font-bold ">Sign-Up</h1>

      
     
  
      <div className="  flex flex-col ">

      <label className="mt-2 ">First name</label>
      <input className="rounded-md border-black border-2" type="text" required />

      <label className="mt-2 ">Last name</label>
      <input className="rounded-md border-black border-2" type="text" required />

      <label className="mt-2 ">Username</label>
      <input className="rounded-md border-black border-2" type="text" required />

      <label className="mt-2 ">Email</label>
      <input className="rounded-md border-black border-2" type="Email"  required/>
      
      <label className="">Password</label>
      <input className="rounded-md border-black border-2" type="password" required/>

      <label className="">Confirm Password</label>
      <input className="rounded-md border-black border-2" type="password" required/>
      </div>
  
      <div className="mt-4">
        <button>Register</button>
      </div>
  
      </div>
      </div>
  
    
  
      </>
    )
  }
  
  export default signUP
  