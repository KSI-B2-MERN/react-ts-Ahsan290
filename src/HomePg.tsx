import NavBar from "./MyComponents/navbar";
import Sidebar from "./MyComponents/sidebar";


function Home(){

    return(
            <>
            <div className="h-screen w-screen">
                <NavBar/>
                <div className="h-screen w-screen  pt-28 pl-8 pb-8 flex">
                    <Sidebar/>
                    <div className=""></div>
                </div>



            </div>
            
            
            
            
            </>
            


    )



}
export default Home;