import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../Api/CreateInstanceApi";


const Login=()=>{
  let [Email,SetEmail]=useState('');
  let [Password,SetPassword]=useState('');
  let [Erorr,SetErorr]=useState('');

  const ValdtionLogin=(data)=>{
    if(Email.length>=8&&Password.length>=8){     Api.post('/login',{email:Email,password:Password}).then((d)=>{console.log(d)})
    .catch((e)=>{if(e.response.status==400){SetErorr(e.response.data.err)}})  }
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
            <input onChange={(e)=>{e.preventDefault();SetPassword(e.target.value)}} className=" border-2 border-gray-500 py-1 rounded-md mb-4 w-4/5 xl:w-3/5 " type="text" placeholder="Enter your password"></input>
        </div>

        <div className=" flex  "><button onClick={(e)=>{e.preventDefault();ValdtionLogin()}} className="text-white bg-blue-700 ml-4  py-2 rounded-xl  w-3/5 xl:w-2/5">Login</button></div>
        <div className="mt-6 text-red-600 ml-4 md:ml-10 xl:ml-32"><p>{Erorr}</p></div>
        
       
      </div>
     
        
    </>)
}

export default Login;