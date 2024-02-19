
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Erorr from './Page/Erorr'; 
import Signup from './Page/Signup';
import Login from './Page/Login';
import Home from './Page/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='*' element={<Erorr/>}></Route>


     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
