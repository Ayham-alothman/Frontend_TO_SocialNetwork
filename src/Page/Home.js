import Navbar from "../component/Navbar.js";
import DataPost from '../DynamicData.js'
import Post from "../component/Post.js";
import UserOnline from "../component/UserOnline.js";
import  socketIo from'../Socket.io/ConfgrationSocket.js';
import {useSelector} from 'react-redux';
import { MdCancel } from "react-icons/md";



import { useEffect, useState } from "react";
import Api from "../Api/CreateInstanceApi.js";



const Home=()=>{ 
     const User =useSelector((state)=>state.User);
     let [showAddPost,setShowAddPost]=useState(false);
     let [textPost,setTextPost]=useState('')
     let [userOnline,SetuserOnline]=useState([]);
     
     
     useEffect(()=>{
        
        socketIo.connect();
        socketIo.emit(`isonline`,User.id);
        socketIo.emit(`onlineFriends`,User.id);
        socketIo.on('friendsOnline',(userOnline)=>{
          SetuserOnline(userOnline)
        })
        socketIo.on('dis',()=>{
         socketIo.emit(`onlineFriends`,User.id);
        })
        socketIo.on('newuser',()=>{
         socketIo.emit(`onlineFriends`,User.id);
        })
        
        return()=>{socketIo.disconnect();}

     },[])
     
     function sendPost(){
        if(textPost.length>0&&textPost.trim().length&&User.id){
            Api.post('/post',{own:User.id,text:textPost,date:Date.now()})
            .then((d)=>{if(d.status==200){setTextPost('');setShowAddPost(false);alert('sucssfuly')}})
            .catch((e)=>{console.log(e)})

        }
     }
      
     
       
    return(<>
    <div className=" " >
        <Navbar nameUser={User.name} />
        <div className=" md:grid md:grid-cols-3 md:gap-1 xl:grid-cols-4 ">
            {/*Fdiv*/ }
            <div className=" hidden bg-gray-200  h-dvh overflow-scroll   md:block md:col-span-1  ">
                <h1 className="font-bold text-3xl text-blue-700 text-center bg-white">Users Online</h1>
                {
                    userOnline.map((e,i)=>{
                        
                        return <div key={i}><UserOnline name={e.name} /></div>

                    })
                }
            </div>
            {/*Sdiv*/ }
            <div className="Containerposts relative ">
                <div className="  bg-white py-4 ">
                    <button className=" py-3 flex   w-3/4 mx-auto text-white font-bold p-10 rounded-xl bg-blue-600   "
                    onClick={()=>{setShowAddPost(true)}}>Add Post</button>


                </div>

                <div className={showAddPost?`w-full bg-white transition duration-1000 ease-in-out `:`hidden`}>
                   <div className="flex justify-end mr-7 "><MdCancel className=" text-3xl text-blue-600 " onClick={()=>{setShowAddPost(false)}} /></div>
                   <div className="">
                     <input className="w-full h-32 pl-2" type="text" placeholder="enter what you want?"
                     onChange={(e)=>{setTextPost(e.target.value)}} value={textPost} ></input>
                     <br></br>
                     <button className="bg-blue-600 text-white rounded-2xl ml-3 my-3 h-12 w-2/5 "
                     onClick={()=>{sendPost()}}>Done</button>
                   </div>

                </div>

                <div>
                 {
                     DataPost.Posts.map((ele,ind)=>{
                         return(  <div key={ind}>  <Post id={ele.id}/>  </div>  )
                     })
                 }
                </div>
               

            </div>
            {/*Fdiv*/ }
            <div className=" hidden bg-gray-200 rounded-2xl h-dvh xl:block"></div>
            
        </div>
    </div>
    
    
    </>)
}

export default Home;