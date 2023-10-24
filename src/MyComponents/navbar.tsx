


    function navBar(){
        return(
        <>
        <div className="bg-white h-16 w-screen flex justify-center  items-center">
            <img className="pl-20" src="https://assets.dukan.pk/demo/dtemp/store-logo1683037149_47073426628770.jpeg" alt=""  width={130}/>
            <p className="text-black pl-10 font-bold">Knowledge Stream</p>
            <div className="flex justify-end w-full">
            <button className="bg-blue-500">Login</button></div>
        </div>

        {/* <span><button className="flex justify-end ">Login</button> */}
    {/* </span> */}
        </>
        )
    }

    export default navBar;
