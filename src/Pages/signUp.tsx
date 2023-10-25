

function signUP() {
  
    return (
      <>

<div className="h-screen w-screen text-black flex justify-center">

          

<div className=" bg-blue-400 w-screen flex flex-col items-center justify-center">


 <div className="flex flex-col">
 <h1 className=" text-black flex justify-start" >Sign-Up</h1>

 {/* <p className=" text-black">Provide your Valid login credentials</p> */}

 <label className="mt-2 " >First name</label>
 <input className="rounded-md border-black border-2" type="text"
 required
 />

<label className="mt-2 " >Last name</label>
 <input className="rounded-md border-black border-2" type="text"
 required
 />

<label className="mt-2 " >Username</label>
 <input className="rounded-md border-black border-2" type="text"
 required
 />

<label className="mt-2 " >Email</label>
 <input className="rounded-md border-black border-2" type="email"
 required
 />


 <label className="">Password</label>
 <input className="rounded-md border-black border-2" type="password" 
 required
 />

<label className="">Confirm password</label>
 <input className="rounded-md border-black border-2" type="password" 
 required
 />

 </div>

 <div className="mt-4">
   <button>Sign-Up</button>
 </div>

 </div>
 </div>

      {/* <div className=" h-screen w-screen  bg-red-300 flex flex-col justify-center items-center">
  
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
      </div> */}
  
    
  
      </>
    )
  }
  
  export default signUP
  