

    function navBar(){
        return(
        <>
        <div className="bg-white h-16 w-screen flex justify-center  items-center">
            <img className="pl-20" src="https://assets.dukan.pk/demo/dtemp/store-logo1683037149_47073426628770.jpeg" alt=""  width={130}/>

            <p className="text-black pl-10 font-bold">Knowledge Stream</p>

            <div className="flex justify-end w-full">
            <a href="" target="" rel="">
            <button  className="bg-blue-500 text-white mr-2">Login</button></a>
            </div>

        </div>

        
        </>
        )
    }

    export default navBar;
