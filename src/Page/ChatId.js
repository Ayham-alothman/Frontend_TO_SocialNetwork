import User from '../Images/User.jpeg'
import { IoMdSend } from "react-icons/io";
import aa from '../DynamicData.js';
import Mesages from '../component/Mesages.js';
import { useState } from 'react';

const ChatId=()=>{
      const [Messages,SetMessages]=useState(aa.Mesagess)
    return(<>
      <div className=" max-w-lg border-4 h-dvh mx-auto">
        <div className=" flex items-center justify-around px-5">
            <div className='w-16 h-16'><img className='rounded-full' src={User} alt='not found'></img></div>
            <h1 className='LargeText text-gray-400'>name user</h1>
        </div>
        
        <div className='h-[490px]  overflow-auto '>
          {
            Messages.map((e,i)=>{
              return <Mesages d={e}/>
            })
          }

        </div>

        <div className='flex border-4   '>
            <input className=' w-full rounded-xl'></input>
            <button><IoMdSend className=' text-4xl text-blue-700' /></button>
        </div>
         
      </div>
    </>)
}

export default ChatId; 