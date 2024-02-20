import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import Api from "../Api/CreateInstanceApi";
const Signup=()=>{
      
    
    const Navigate=useNavigate();
    let [Name,SetName]=useState('');
    let [Email,SetEmail]=useState('');
    let [Password,SetPassword]=useState('');
    let [Erorr,SetErorr]=useState('');
    const SignAccountinDataBase=()=>{ 
        if(Email.length>=8&&Password.length>=8){    
            Api.post('/signup',{name:Name,email:Email,password:Password})
        .then((d)=>{console.log(d)
            if(d.status=200){ 
             
                sessionStorage.setItem('token',d.data);
                Navigate('/') 
            }
        })
        .catch((e)=>{if(e.response.status=403){
            
            SetErorr(e.response.data.e)
        }})

          }
    else if(Email.length<8){SetErorr('must email contain least 8 charectars')}
    else if(Password.length<8){SetErorr('must pssword contain least 8 charectars')}
        

    }
    return(<>
       <div className="px-5 sm:px-10 md:px-15 xl:px-20 mt-10">
        
        <div className=" mb-16">
            <h1 className=" LargeText mb-3">Signup on Social Network</h1>
            <p className=" SmallText ">Already have an account?<span className=" text-xl text-black"><Link to="/login"> Sign in here</Link></span></p>

        </div>

        <div className="">
            <p className=" font-bold">Name</p>
            <input onChange={(e)=>{SetName(e.target.value)}}
             className="FormatInput mt-1" placeholder="Enter your name "></input>

            <p className=" font-bold">Email</p>
            <input onChange={(e)=>{SetEmail(e.target.value)}} 
            className="FormatInput mt-1" placeholder="Enter your Email "></input>

            <p className=" font-bold">Password</p>
            <input  type="password" onChange={(e)=>{SetPassword(e.target.value)}}
             className="FormatInput mt-1" placeholder="Enter your Password " ></input>
        </div>

        <div className="mt-4 ">
            <button onClick={(e)=>{e.preventDefault();
            SignAccountinDataBase()}} 
            className="Bigbtn text-white">Signup</button>
        </div>

        <div className="mt-6 text-red-600 ml-4 md:ml-10 xl:ml-32"><p>{Erorr}</p></div>


       </div>
    
    </>)
}

export default Signup;