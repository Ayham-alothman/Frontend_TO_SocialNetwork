import post2 from '../Images/post2.jpeg'
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { useState } from 'react';


const Post=(data)=>{
    let [Like,SetLike]=useState(false)
    return(<>
    <div className=" mb-1 bg-white">
        <div className=' px-3'  >
            <p className=' font-semibold'>The app provides widgets where you can write any kind of text.
                 It could be an important note, your goal, a list of tasks, etc.</p>
            <div className='flex justify-center'><img className=' rounded-xl  border-4' src={post2} alt='not found'></img></div>
            <div className='flex justify-center'>
                <div onClick={()=>{SetLike(!Like)}}
                 className='w-32  h-8'><AiFillLike  className={Like?`mx-auto text-2xl  text-blue-700`:`mx-auto text-2xl  text-gray-400`}/></div>
                <div className='w-32  h-8'><FaComment   className=' mx-auto text-2xl text-gray-400'/>  </div>
            </div>
            
           
        </div>
    </div>
    </>)
}
export default Post;
