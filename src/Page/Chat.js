import { useNavigate } from 'react-router-dom';
import Converation from '../component/Converation.js';
import {useEffect,useState}from 'react';
import Api from '../Api/CreateInstanceApi.js';
const Chat=()=>{
  let [Chats,setChats]=useState([])
  
  useEffect(()=>{
  
    Api.get(`/chat`)
    .then((d)=>{setChats(d.data)})
    .catch((e)=>{})  },)
  const Navigate=useNavigate()
  const Navigatechat=(idchat)=>{

    Navigate(`/chat/${idchat}`)
  }
    return(<>
    <div className="px-5 sm:px-10 md:px-20 xl:px-52 ">

        {/*Fdiv*/}
      <div>
        <h1 className="LargeText">converations</h1>
        {
            Chats.map((e,i)=>{
                return (
                <div className='px-2  h-20' key={i} onClick={(ele)=>{ele.preventDefault();
                  Navigatechat(e.chatid)}}>
                  <Converation name={e.name} id={e.chatid} />
                </div>
                )

            })

        }

      </div>
        {/*Sdiv*/}
      <div className="hdden">
         v
      </div>
    </div>
    </>)
}
export default Chat;
