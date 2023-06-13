import Layout1imageinv from "../components/Layout/Layout1imageinv"
import LayoutFullImage from "../components/Layout/LayoutFullImage"
import Layout2col from "../components/Layout/Layout2col";

import cb from "./../images/conseils/Conseil-banner.png";

import I1C1 from "./../images/conseils/Carousel1/Image1C1.png";

import I1C2 from "./../images/conseils/Carousel2/Image1C2.png";
import I2C2 from "./../images/conseils/Carousel2/Image2C2.png";
import I3C2 from "./../images/conseils/Carousel2/Image3C2.png";

import MQ from "./../images/conseils/Carousel3/maquillage.png";
import NU from "./../images/conseils/Carousel3/routines.png";
import RT from "./../images/conseils/Carousel3/nutrition.png";

import I1C4 from "./../images/conseils/Carousel4/Image1C4.png";
import I2C4 from "./../images/conseils/Carousel4/Image2C4.png";
import I3C4 from "./../images/conseils/Carousel4/Image3C4.png";

import {switchtext} from './../components/textdivers';
import Carousel2 from "../components/Layout/Carousel2";


const Conseils = () =>{
    function itemCarousel(image,col){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <div>
                    <div className="mt-[20px] w-full flex center"> <img src={image}  alt="image"/></div>  
                    {col}    
                </div>
            </div>
            </>)

    }
    let listCarousel = [
        itemCarousel(I1C1,switchtext("ConseilCarousel1Image1")),
        itemCarousel(I1C1,switchtext("ConseilCarousel1Image1")),
        itemCarousel(I1C1,switchtext("ConseilCarousel1Image1"))
    ]
    let listCarousel2 = [
        itemCarousel(I1C2,switchtext("ConseilCarousel2Image1")),
        itemCarousel(I2C2,switchtext("ConseilCarousel2Image2")),
        itemCarousel(I3C2,switchtext("ConseilCarousel2Image3")),
        itemCarousel(I2C2,switchtext("ConseilCarousel2Image1")),
        itemCarousel(I1C2,switchtext("ConseilCarousel2Image2")),
        itemCarousel(I3C2,switchtext("ConseilCarousel2Image3"))
    ]
    let listCarousel3 = [
        itemCarousel(MQ),
        itemCarousel(RT),
        itemCarousel(NU),
        itemCarousel(MQ),
        itemCarousel(RT),
        itemCarousel(NU)
    ]
    let listCarousel4 = [
        itemCarousel(I1C4,switchtext("ConseilCarousel4Image1")),
        itemCarousel(I2C4,switchtext("ConseilCarousel4Image2")),
        itemCarousel(I3C4,switchtext("ConseilCarousel4Image3")),
        itemCarousel(I1C4,switchtext("ConseilCarousel4Image1")),
        itemCarousel(I2C4,switchtext("ConseilCarousel4Image2")),
        itemCarousel(I3C4,switchtext("ConseilCarousel4Image3"))
    ]
    return (<>

    <LayoutFullImage props={{image1:{url:cb,alt:"Conseil-banner"}}}/>  

    <div className="w-full text-center text-[50px] font-av-bold text-blue">Nos conseils</div>
    <Carousel2 props={{items:listCarousel,nbShow:1,ratio:20,showPoint:true}}/>

    <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>

    <div className="w-full text-center text-[50px] font-av-bold text-blue">Les derniers tutos...</div>
    <Carousel2 props={{items:listCarousel2,nbShow:3,ratio:10,showPoint:true}}/>

    <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>

    <div className="w-full text-center text-[50px] font-av-bold text-blue">Catégories</div>
    <Carousel2 props={{items:listCarousel3,nbShow:3,ratio:10,showPoint:true}}/>

    <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>

    <div className="w-full text-center text-[50px] font-av-bold text-blue">Nos conseils</div>
    <Carousel2 props={{items:listCarousel4,nbShow:3,ratio:10,showPoint:true}}/>
    <div className="w-full h-[20px]"></div>
    </>)
}

export default Conseils