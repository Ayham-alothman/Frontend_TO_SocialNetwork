import User from '../Images/User.jpeg'

const Converation=(data)=>{
    return(<>
    
      <div className='flex items-center justify-between '>
          <p className='font-semibold text-xl text-gray-700'>{data.name}</p>
          <div className='w-12 h-12'><img className=' rounded-full' src={User} alt='not found'></img></div>
      </div>
      <h1 className="bg-black h-[1px] mt-5"></h1>

    
    </>)
}
export default Converation;