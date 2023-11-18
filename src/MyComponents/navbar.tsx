import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  fName: string;
  lName: string;
  role: number;
};

    function NavBar(){
        const [user, setUser] = useState<User>();

  const getUser = async () => {
    const userData = await axios.get("http://localhost:3000/users/getUser", {
      params: {
        id: 4,
      },
    });

    setUser(userData.data);
  };
  useEffect(() => {
    void getUser();
  }, []);
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
