import { io } from "socket.io-client";
import {useEffect} from 'react'

 const  socketIo= io('http://localhost:4000/',{autoConnect:false});

 export default socketIo;
 




