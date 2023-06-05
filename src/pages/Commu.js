
import ExpertiseHome from "../components/ExpertiseHome";
import Layout1image from "../components/Layout/Layout1image";
import Layout1imageinv from "../components/Layout/Layout1imageinv";
import LayoutFullImage from "../components/Layout/LayoutFullImage";
import { switchtext } from "../components/textdivers";
import v15 from "./../images/visage15.png";
import v16 from "./../images/visage16.png";
import v17 from "./../images/visage17.png";
import v18 from "./../images/visage18.png";
import v19 from "./../images/visage19.png";
import v14 from "./../images/visage14.png";
import v2 from "./../images/visage2.png";
import v3 from "./../images/visage3.png";
import v4 from "./../images/visage4.png";
import Carousel2 from './../components/Layout/Carousel2';
const Commu = ()=>{
    function itemCarousel(image,titre){
        return (<div className="relative w-[300px] h-[200px] rounded-2xl bg-white" key={`item-${titre}`}>
            <img src={image} alt={titre} className="w-full h-full rounded-2xl"/>
            <div className="absolute bottom-0 w-full h-[30px] text-white text-lg bg-black opacity-50 rounded-b-2xl">
                {titre}
            </div>
        </div>)

    }
    let listCarousel = [
        itemCarousel(v2,"visage2"),
        itemCarousel(v3,"visage3"),
        itemCarousel(v4,"visage4"),
        itemCarousel(v14,"visage14"),
        itemCarousel(v15,"visage15"),
        itemCarousel(v16,"visage16"),
        itemCarousel(v19,"visage19")
        
    ]
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
        <Carousel2 props={{items:listCarousel,nbShow:4}}/>

        </>
    )
}
export default Commu;