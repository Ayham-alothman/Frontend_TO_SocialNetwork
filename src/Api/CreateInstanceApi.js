import axios from "axios";

const Api=axios.create({baseURL:'http://localhost:4000/'});
 
if(sessionStorage.getItem('token')){
    Api.interceptors.request.use((con)=>{
        con.headers.Authorization=sessionStorage.getItem('token');
    })
}

export default Api;