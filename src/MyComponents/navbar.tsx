

    function NavBar(){
        return(
        <>
            <div className="">

                <div className="bg-blue-500 h-20 w-screen flex">
    
                    <div className="flex align-center">
                        <img className="p-5" src="https://assets.dukan.pk/demo/dtemp/store-logo1683037149_47073426628770.jpeg" alt=""  width={90}/>
                    </div>
    
                    <div className="flex  items-center ">
                        <p className="text-white  font-bold">Knowledge Stream</p>
                        <p className="text-white  font-samibold pl-10 hover:font-bold">Visit Website</p>
                    </div>

                    <div className="border-x flex  flex-col items-end">
                        <p>User name</p>
                        <p>Instructor</p>


                        {/* <a href="" target="" rel="">
                        </a> */}
                        </div>

                    </div>

        
            </div>
        </>
        )
    }

    export default NavBar;
