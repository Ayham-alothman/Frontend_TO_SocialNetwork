import Navbar from "../component/Navbar";
import DataPost from '../DynamicData'
import Post from "../component/Post";


const Home=()=>{
    return(<>
    <div className=" " >
        <Navbar/>
        <div className=" md:grid md:grid-cols-3 md:gap-1 xl:grid-cols-4 ">
            {/*Fdiv*/ }
            <div className=" hidden bg-gray-200 rounded-2xl h-dvh   md:block md:col-span-1  "></div>
            {/*Sdiv*/ }
            <div className=" bg-gray-200 rounded-2xl  md:col-span-2">
                {
                    DataPost.map((ele,ind)=>{
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