import { useNavigate } from 'react-router-dom';
import Dynamicdata from '../DynamicData.js'
import Converation from '../component/Converation.js';
const Chat=()=>{
  const Navigate=useNavigate()
  const Navigatechat=(idchat)=>{

    Navigate(`/chat/${idchat}`)
  }
    return(<>
    <div className="px-5 sm:px-10 md:px-20 xl:px-52 ">

        {/*Fdiv*/}
      <div>
        <h1 className="LargeText">converations</h1>
        {
            Dynamicdata.Converations.map((e,i)=>{
                return (
                <div className='px-2  h-20' key={e.idc} onClick={(ele)=>{ele.preventDefault();
                Navigatechat(e.idc)}}>
                  <Converation name={e.name} id={e.idc} />
                </div>
                )

            })

        }

      </div>
        {/*Sdiv*/}
      <div className="hdden">

      </div>
    </div>
    </>)
}
export default Chat;
