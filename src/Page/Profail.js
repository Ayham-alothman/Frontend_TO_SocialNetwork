import { useParams } from "react-router-dom";
import User from '../Images/User.jpeg'
import Cover from '../Images/Cover.png'
import DataPost from '../DynamicData'
import Post from "../component/Post";
import Api from '../Api/CreateInstanceApi'
import { useEffect, useState } from "react";
const Profail=()=>{
       const idUser= useParams()
    let [hisName,sethisName]= useState('');
       
     let [myAccount,SetmyAccount]= useState(false);
     let [Friend,SetFriend]= useState(false);
     let [NoFriend,SetNoFriend]= useState(false);
     let [Hesend,SetNoHesend]= useState(false);
     let [yousend,Setyousend]= useState(false);
     
     function setState(state){
        
        if(state==1){
            SetmyAccount(true)
            SetFriend(false)
            SetNoFriend(false)
            SetNoHesend(false)
            Setyousend(false)
        }
        else if(state==2){
            SetmyAccount(false)
            SetFriend(true)
            SetNoFriend(false)
            SetNoHesend(false)
            Setyousend(false)
        }
        else if(state==3){
            SetmyAccount(false)
            SetFriend(false)
            SetNoFriend(false)
            SetNoHesend(false)
            Setyousend(true)
        }
        else if(state==4){
            SetmyAccount(false)
            SetFriend(false)
            SetNoFriend(false)
            SetNoHesend(true)
            Setyousend(false)
        }
        else if(state==5){
            SetmyAccount(false)
            SetFriend(true)
            SetNoFriend(false)
            SetNoHesend(false)
            Setyousend(false)
        }
     }

     useEffect(()=>{
        Api.get(`/profail/${idUser.id}`)
        .then((d)=>{console.log(d)})
        .catch((e)=>{console.log(e.request)
            if(e.request.status==0){console.log('the server out ')}
            else if(e.request.status==403){console.log(e.request.response)}
        })
     },[])

    
       
    return(<>
     <div className="mx-auto sm:w-[650px] ">
        <div className="bg-black h-48">
            <img src={Cover} className=" w-full h-full"></img>
        </div>
        <div className="bg-white h-80">
            <h1 className="LargeText flex justify-center max-sm:pl-16 pt-5">{hisName}</h1>
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