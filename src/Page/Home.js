import Navbar from "../component/Navbar";
import DataPost from '../DynamicData'
import Post from "../component/Post";
import UserOnline from "../component/UserOnline";


const Home=()=>{ console.log(DataPost.UsersOnline)
    return(<>
    <div className=" " >
        <Navbar/>
        <div className=" md:grid md:grid-cols-3 md:gap-1 xl:grid-cols-4 ">
            {/*Fdiv*/ }
            <div className=" hidden bg-gray-200  h-dvh overflow-scroll   md:block md:col-span-1  ">
                <h1 className="font-bold text-3xl text-blue-700 text-center bg-white">Users Online</h1>
                {
                    DataPost.UsersOnline.map((e,i)=>{
                        
                        return <UserOnline name={e.name}/>

                    })
                }
            </div>
            {/*Sdiv*/ }
            <div className=" bg-gray-200 rounded-2xl  md:col-span-2 h-dvh overflow-scroll		">
                {
                    DataPost.Posts.map((ele,ind)=>{
                        return(<Post id={ele.id}/>)
                    })
                }
            </div>
            {/*Fdiv*/ }
            <div className=" hidden bg-gray-200 rounded-2xl h-dvh xl:block"></div>
            
        </div>
    </div>
    
    
    </>)
}

export default Home;