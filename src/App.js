
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ProtectinRoute from './Utility/ProtectionRoute.js';

import Erorr from './Page/Erorr.js'; 
import Signup from './Page/Signup.js';
import Login from './Page/Login.js';
import Home from './Page/Home.js';
import Profail from './Page/Profail.js';
import Chat from './Page/Chat.js';
import ChatId from './Page/ChatId.js';

function App() {
  return (
    <>
    <BrowserRouter>
    
     <Routes>
      <Route element={<ProtectinRoute/>}>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/chat' element={<Chat/>}></Route>
       <Route path='/chat/:chatid' element={<ChatId/>}></Route>
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
