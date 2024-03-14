import {useSelector} from 'react-redux'     
const Mesages=(e)=>{
    const infoUser=useSelector((s)=>s.User);
    return(<>
    <div className="px-2 py-2">
        <p className={e.data.own===infoUser.id?
            `bg-blue-700 py-2 mr-60 rounded-2xl px-5 font-semibold text-white`  :
            `bg-gray-500 py-2 ml-60 rounded-2xl px-5 font-semibold text-white`  
            }>{e.data.content}</p>
    </div>
    </>)
}

export default Mesages