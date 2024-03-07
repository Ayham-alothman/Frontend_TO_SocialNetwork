import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../Api/CreateInstanceApi.js";
import {  decodeToken } from "react-jwt";
import {useDispatch} from "react-redux";
import {actionSliceuser} from '../GlobalState/Slices/UserSlice.js';


const Login=()=>{
  const Dispatch=useDispatch()
  const Navigate=useNavigate()
  const {setUser}=actionSliceuser;
  let [Email,SetEmail]=useState('');
  let [Password,SetPassword]=useState('');
  let [Erorr,SetErorr]=useState('');

  const ValdtionLogin=(data)=>{
    if(Email.length>=8&&Password.length>=8){   
        Api.post('/login',{email:Email,password:Password})
        .then((d)=>{
         sessionStorage.setItem('token',d.headers.token);
         const decodeTokenn=decodeToken(d.headers.token);
         const payload={
          id:decodeTokenn.id,
          name:decodeTokenn.name,
          email:decodeTokenn.email,
          friends:decodeTokenn.friends,
          sendrequest:decodeTokenn.sendreq,
          receiverequest:decodeTokenn.receivereq
        }
        Dispatch(setUser(payload))
         Navigate('/')
      
         })
         .catch((e)=>{console.log(e)
             if(e.response.status===400){SetErorr(e.response.data.err)}})  }
             else if(Email.length<8){SetErorr('must email contain least 8 charectars')}
             else if(Password.length<8){SetErorr('must pssword contain least 8 charectars')}
  }

    return(<>
      <div className=" mt-10 px-5 sm:px-10 md:px-24 ">
        <div className=" mb-16">
            <h1 className="LargeText mb-2">Login to your account</h1>
            <p className=" text-gray-500 font-light text-sm ">No account yet?<span><Link to='/signup' className=" text-lg text-black" > Sign up for free here.</Link> </span></p>
        </div>
        
        <div  className="  py-6">
            <p className="text-xl font-semibold pb-1">Email</p>
            <input onChange={(e)=>{e.preventDefault();SetEmail(e.target.value)}} className=" border-2 border-gray-500 py-1 rounded-md mb-4 w-4/5 xl:w-3/5" type="text" placeholder="Enter your email"></input>
            <p className="text-xl font-semibold pb-1">Password</p>
            <input type="password" onChange={(e)=>{e.preventDefault();SetPassword(e.target.value)}} className=" border-2 border-gray-500 py-1 rounded-md mb-4 w-4/5 xl:w-3/5 "  placeholder="Enter your password"></input>
        </div>

        <div className=" flex  "><button onClick={(e)=>{e.preventDefault();ValdtionLogin()}} className="text-white bg-blue-700 ml-4  py-2 rounded-xl  w-3/5 xl:w-2/5">Login</button></div>
        <div className="mt-6 text-red-600 ml-4 md:ml-10 xl:ml-32"><p>{Erorr}</p></div>
        
       
      </div>
     
        
    </>)
}

export default Login;