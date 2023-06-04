
import ExpertiseHome from "../components/ExpertiseHome";
import Layout1image from "../components/Layout/Layout1image";
import Layout1imageinv from "../components/Layout/Layout1imageinv";
import LayoutFullImage from "../components/Layout/LayoutFullImage";
import { switchtext } from "../components/textdivers";
import v17 from "./../images/visage17.png";
import v18 from "./../images/visage18.png";
import v19 from "./../images/visage19.png";
const Commu = ()=>{
    return (<>
        <LayoutFullImage props={{titre:"MA COMMUNAUTÉ",image1:{url:v17,alt:"visage17"}}}/>
        <div className="w-full flex center mt-[100px]">
            <div className="w-[80%] flex flex-col ">
                <p className="text-[50px]">La communauté qui te ressemble</p>
                <div className='w-full flex center mt-[60px]'><img src={v18} alt={"v18"} className="w-full"/></div>
                <div className="flex center mt-[60px]"><div className="text-[36px] w-fit px-8 py-4 bg-[#264C4D] rounded-full font-av-bold text-white text-left"><p>Rejoigner la communauté</p></div></div>
                <div className=" flex flex-row center mt-[80px] mb-[80px]">

                    <div className="w-[220px] h-[220px]">
                    <img src={v19} alt="v19"/>
                    </div>
                <div className="w-[1100px] h-[220px] bg-white rounded-r-3xl p-4">
                    <p className="text-[36px] font-av-bold text-left">Nouveau venu ?</p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Commu;