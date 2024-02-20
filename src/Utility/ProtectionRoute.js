import { Navigate, Outlet } from "react-router-dom";

const ProtectinRoute=()=>{
    let Auth=false
  if(sessionStorage.getItem('token')){Auth=true};
  return( Auth ? <Outlet/>:<Navigate to={'/login'}/>)

}

export default ProtectinRoute;