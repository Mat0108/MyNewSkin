import Layout1imageinv from "../components/Layout/Layout1imageinv"
import LayoutFullImage from "../components/Layout/LayoutFullImage"
import Layout2col from "../components/Layout/Layout2col";

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
        itemCarousel(v5,switchtext("Carousel1")),
        itemCarousel(v5,switchtext("Carousel1")),
        itemCarousel(v5,switchtext("Carousel1"))
    ]
    let listCarousel2 = [
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1")),
        itemCarousel(v14,switchtext("Carousel1"))
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