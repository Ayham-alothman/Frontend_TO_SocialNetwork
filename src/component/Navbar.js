import { IoNotifications } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import User from '../Images/User.jpeg'
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar=(data)=>{
    let [Show,SetShow]=useState(false)
    

    return(
        <div className="flex justify-between items-center bg-blue-700 h-16 px-5">
            {/* Fdiv */}
            <div className="  flex justify-center items-center space-x-2">
                <div className=" text-xl font-bold text-white">{data.nameUser}</div>
                <div className="h-12 w-12  " >    <img className=" rounded-full" alt='Not found' src={User}></img></div>
                <div className=" text-2xl text-white"><IoNotifications /></div>
                <div className=" text-2xl text-white sm:hidden" onClick={()=>{SetShow(!Show)}}><FaPlus /></div>
                <div className="text-2xl text-white hidden sm:block"><Link to={'/chat'}><IoMdChatboxes/></Link> </div>
                <div className="text-2xl text-white hidden sm:block"><FaUserFriends /></div>

            </div>
            
            {/* Secanddiv */}
            <div className="flex  items-center justify-between space-x-5 ">
                <input placeholder="what you think?" className="hidden py-2 rounded-3xl md:block"></input>
                <div className=" text-2xl text-white md:hidden"><BsSearch /></div>

            </div>
            {/* iterface absloute */}
            <div className={Show?`flex flex-col pt-6 space-y-5 items-center absolute bg-blue-700 h-40 w-32 rounded-2xl top-16 left-48  `:`hidden`}>
                <div className=" text-3xl text-white  sm:hidden  "><IoMdChatboxes/></div>
                <div className=" text-3xl text-white  sm:hidden  "><FaUserFriends /></div>
            </div>

             

            
        </div>
    )

}
export default Navbar;