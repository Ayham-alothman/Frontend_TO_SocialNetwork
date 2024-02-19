import axios from "axios";

const Api=axios.create({baseURL:'http://localhost:4000/'});
 
export  const SetToken=(token)=>{
Api.interceptors()
};

export default Api;