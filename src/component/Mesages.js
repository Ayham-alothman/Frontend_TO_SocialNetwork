const Mesages=(data)=>{
    return(<>
    <div className="px-2 py-2">
        <p className={data.d.own==1?
            `bg-blue-700 py-2 mr-60 rounded-2xl px-5 font-semibold text-white`  :
            `bg-gray-500 py-2 ml-60 rounded-2xl px-5 font-semibold text-white`  
            }>{data.d.content}</p>
    </div>
    </>)
}

export default Mesages