import User from '../Images/User.jpeg'
import { IoMdSend } from "react-icons/io";
import Mesages from '../component/Mesages.js';
import { useState,useEffect } from 'react';
import Api from '../Api/CreateInstanceApi.js'
import { useParams } from 'react-router-dom';
import socketIo from '../Socket.io/ConfgrationSocket.js';
import {useSelector} from 'react-redux'

const ChatId=()=>{
      const infoUser=useSelector((s)=>s.User);
      const chatidparams=useParams().chatid;
      
      const [Messages,SetMessages]=useState([]);
      let [curMessage,setcurMessage]=useState('');
      useEffect(()=>{
        Api.get(`messages/${chatidparams}`)
        .then((d)=>{SetMessages(d.data.messagess)})
        .catch((e)=>{console.log(e)})

      },[])
      
      useEffect(()=>{
        socketIo.connect();
        socketIo.emit('init',chatidparams)
        socketIo.on('receivemessage',(res)=>{
          SetMessages(P=>[...P,res])
        })

        return()=>{socketIo.disconnect();}
      },[socketIo])

      function sendMessage(){
        //socketIo.emit('sendmessage',payload);
        //SetMessages((P)=>[...P,payload]);
        if(curMessage.length>0&&curMessage.trim().length){
          SetMessages((P)=>[...P,{
            chatid:chatidparams,
            content:curMessage,
            date:Date.now(),
            own:infoUser.id,
          }]);
          socketIo.emit('sendmessage',{
            chatid:chatidparams,
            content:curMessage,
            date:Date.now(),
            own:infoUser.id,
          })
          setcurMessage('');
        }
        
      }


    return(<>
      <div className=" max-w-lg border-4 h-dvh mx-auto">
        <div className=" flex items-center justify-around px-5">
            <div className='w-16 h-16'><img className='rounded-full' src={User} alt='not found'></img></div>
            <h1 className='LargeText text-gray-400'>name user</h1>
        </div>
        
        <div className='h-[490px]  overflow-auto '>
          {
            Messages.map((e,i)=>{
              return <div key={i}><Mesages data={e}/> </div>
            })
          }

        </div>

        <div className='flex border-4   '>
            <input className=' w-full rounded-xl' onChange={(e)=>{setcurMessage(e.target.value)}} value={curMessage}></input>
            <button onClick={()=>{sendMessage()}}><IoMdSend className=' text-4xl text-blue-700' /></button>
        </div>
         
      </div>
    </>)
}

export default ChatId; 