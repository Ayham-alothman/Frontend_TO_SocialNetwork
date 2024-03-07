import Navbar from "../component/Navbar.js";
import DataPost from '../DynamicData.js'
import Post from "../component/Post.js";
import UserOnline from "../component/UserOnline.js";
import  socketIo from'../Socket.io/ConfgrationSocket.js';
import {useSelector} from 'react-redux'


import { useEffect, useState } from "react";



const Home=()=>{ 
     const User =useSelector((state)=>state.User);
     
     let [userOnline,SetuserOnline]=useState([]);
     
     useEffect(()=>{
        console.log(User.id);
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
            <div className="Containerposts">
                {
                    DataPost.Posts.map((ele,ind)=>{
                        return(  <div key={ind}>  <Post id={ele.id}/>  </div>  )
                    })
                }
            </div>
            {/*Fdiv*/ }
            <div className=" hidden bg-gray-200 rounded-2xl h-dvh xl:block"></div>
            
        </div>
    </div>
    
    
    </>)
}

export default Home;