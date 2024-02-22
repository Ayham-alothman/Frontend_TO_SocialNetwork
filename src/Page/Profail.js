import { useParams } from "react-router-dom";
import User from '../Images/User.jpeg'
import Cover from '../Images/Cover.png'
import DataPost from '../DynamicData'
import Post from "../component/Post";
import { useState } from "react";
const Profail=()=>{
     let [myAccount,SetmyAccount]= useState(false);
     let [Friend,SetFriend]= useState(true);
     let [NoFriend,SetNoFriend]= useState(false);
     let [Hesend,SetNoHesend]= useState(false);
     let [yousend,Setyousend]= useState(false);

    
       
    return(<>
     <div className="mx-auto sm:w-[650px] ">
        <div className="bg-black h-48">
            <img src={Cover} className=" w-full h-full"></img>
        </div>
        <div className="bg-white h-80">
            <h1 className="LargeText flex justify-center max-sm:pl-16 pt-5">the name</h1>
            <div>
                {myAccount?<>
                    <div className=" Containertwobutton ">
                        <button className="Btncon">Edit Setting</button>
                        <button className="Btncon">Add post</button>
                    </div>
                    </>:false}
                {Friend?<>
                <div className="Containertwobutton">
                    <button className="Btncon">Cancel Friend</button>
                    <button className="Btncon">Message</button>

                </div>
                </>:false} 
                {NoFriend?<>
                <div className="Containertwobutton">
                    <button className="Btncon">Add Friend</button>
                    <button className="Btncon">Message</button>

                </div>
                </>:false}    
                {Hesend?<>
                    <div className="Containertwobutton">
                    <button className="Btncon">Accept request</button>
                    <button className="Btncon">Cancel request</button>
                    <button className="Btncon">Message</button>

                    </div>
                </>:false}    
                {yousend?<>
                    <div className="Containertwobutton">
                    <button className="Btncon">Cancel request</button>
                    <button className="Btncon">Message</button>

                    </div>
                </>:false}
            </div>
        </div>
        <div className="bg-black rounded-full  h-32 w-32 absolute top-40  left-1/5    "><img className="rounded-full" src={User}></img></div>
        <div>
        {
                    DataPost.Posts.map((ele,ind)=>{
                        return(<Post id={ele.id}/>)
                    })
                }
        </div>
     </div>
    
    </>)
}

export default Profail;