import Layout1imageinv from "../components/Layout/Layout1imageinv"
import LayoutFullImage from "../components/Layout/LayoutFullImage"
import Layout2col from "../components/Layout/Layout2col";

import cb from "./../images/conseils/Conseil-banner.png";

import I1C1 from "./../images/conseils/Carousel1/Image1C1.png";

import I1C2 from "./../images/conseils/Carousel2/Image1C2.png";
import I2C2 from "./../images/conseils/Carousel2/Image2C2.png";
import I3C2 from "./../images/conseils/Carousel2/Image3C2.png";

import {switchtext} from './../components/textdivers';

import qsn from "./../images/quisommenous.png";
import v9 from "./../images/visage/visage9.png";
import v10 from "./../images/visage/visage10.png";
import v11 from "./../images/visage/visage11.png";
import v14 from "./../images/visage/visage14.png";
import Carousel from "../components/Layout/Carousel";
import v5 from "./../images/visage/visage5.png";
import skincare from "../images/SkinCare1.png"
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
        itemCarousel(I1C1,switchtext("Carousel1")),
        itemCarousel(I1C1,switchtext("Carousel1")),
        itemCarousel(I1C1,switchtext("Carousel1"))
    ]
    let listCarousel2 = [
        itemCarousel(I1C2,switchtext("Carousel1")),
        itemCarousel(I2C2,switchtext("Carousel1")),
        itemCarousel(I3C2,switchtext("Carousel1")),
        itemCarousel(I2C2,switchtext("Carousel1")),
        itemCarousel(I1C2,switchtext("Carousel1")),
        itemCarousel(I3C2,switchtext("Carousel1"))
    ]
    let listCarousel3 = [
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1"))
    ]
    let listCarousel4 = [
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1"))
    ]
    return (<>

    <LayoutFullImage props={{image1:{url:qsn,alt:"Conseil-banner"}}}/>  

    <div className="w-full text-center text-[50px] font-av-bold text-blue">Nos conseils</div>
    <Carousel2 props={{items:listCarousel,nbShow:1,ratio:20,showPoint:true}}/>

    <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>

    <div className="w-full text-center text-[50px] font-av-bold text-blue">Nos conseils</div>
    <Carousel2 props={{items:listCarousel2,nbShow:3,ratio:10,showPoint:true}}/>

    <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>

    <div className="w-full text-center text-[50px] font-av-bold text-blue">Nos conseils</div>
    <Carousel2 props={{items:listCarousel2,nbShow:3,ratio:10,showPoint:true}}/>

    <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>

    <div className="w-full text-center text-[50px] font-av-bold text-blue">Nos conseils</div>
    <Carousel2 props={{items:listCarousel2,nbShow:3,ratio:10,showPoint:true}}/>
    </>)
}

export default Conseils