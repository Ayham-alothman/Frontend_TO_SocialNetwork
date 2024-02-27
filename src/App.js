
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProtectinRoute from './Utility/ProtectionRoute';

import Erorr from './Page/Erorr'; 
import Signup from './Page/Signup';
import Login from './Page/Login';
import Home from './Page/Home';
import Profail from './Page/Profail';
import Chat from './Page/Chat';
import ChatId from './Page/ChatId';
function App() {
  return (
    <>
    <BrowserRouter>
    
     <Routes>
      <Route element={<ProtectinRoute/>}>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/chat' element={<Chat/>}></Route>
       <Route path='/chat/:id' element={<ChatId/>}></Route>
       <Route path='/profail/:id' element={<Profail/>}></Route>
       
      </Route>
      
      <Route path='login' element={<Login/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='*' element={<Erorr/>}></Route>


     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
