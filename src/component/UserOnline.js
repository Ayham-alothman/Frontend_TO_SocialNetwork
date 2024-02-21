import { BsFillPersonLinesFill } from "react-icons/bs";
import User from '../Images/User.jpeg'

const UserOnline=(data)=>{ 
    return(<>
    <div className="bg-white mb-1 h-20 flex items-center px-8  ">
        <div className=" w-10 h-10 mr-4"><img src={User}></img></div>
        <div>
            <p>{data.name}</p>
            <BsFillPersonLinesFill className=" text-green-500" />
        </div>



    </div>
    
    
    </>)
}
export default UserOnline;
