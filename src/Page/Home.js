import Navbar from "../component/Navbar.js";
import DataPost from '../DynamicData.js'
import Post from "../component/Post.js";
import UserOnline from "../component/UserOnline.js";
import { isExpired, decodeToken } from "react-jwt";
import  socketIo from'../Socket.io/ConfgrationSocket.js'


import { useEffect, useState } from "react";
const token=sessionStorage.getItem('token');


const Home=()=>{ 
     let [InfoUser,SetInfoUser]=useState(decodeToken(sessionStorage.getItem('token')));
     let [userOnline,SetuserOnline]=useState([]);
     
     useEffect(()=>{console.log('setuseeffect')
        socketIo.connect();
        socketIo.emit(`isonline`,InfoUser.id);
        socketIo.emit(`onlineFriends`,InfoUser.id);
        socketIo.on('friendsOnline',(userOnline)=>{
          SetuserOnline(userOnline)
        })
        socketIo.on('dis',()=>{console.log('set event dis')
         socketIo.emit(`onlineFriends`,InfoUser.id);
        })
        socketIo.on('newuser',()=>{console.log('set new user')
         socketIo.emit(`onlineFriends`,InfoUser.id);
        })
        
        return()=>{socketIo.disconnect();}

     },[])
     
      
     
       
    return(<>
    <div className=" " >
        <Navbar nameUser={InfoUser.name} />
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