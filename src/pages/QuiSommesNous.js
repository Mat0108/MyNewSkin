import Layout1imageinv from "../components/Layout1imageinv"
import LayoutFullImage from "../components/LayoutFullImage"
import Layout2col from "../components/Layout2col";

import {switchtext} from './../components/textdivers';

import qsn from "./../images/quisommenous.png";
import v9 from "./../images/visage9.png";
import v10 from "./../images/visage10.png";
import v11 from "./../images/visage11.png";
import v12 from "./../images/visage12.png";
import Carousel from "../components/Carousel";

const QuiSommesNous = () =>{
    return (<>
    <LayoutFullImage props={{titre:"QUI SOMMES NOUS ?",image1:{url:qsn,alt:"quisommenous"}}}/>
    <Layout1imageinv props={{col1:switchtext("quisommesnous"),image1:{url:v9,alt:"visage9"}}} />
    <div className="w-full">
        <img src={v10} alt={"visage10"}/>
    </div>
    <Layout2col props={{titre:switchtext("quisommesnous2"),col1:switchtext("quisommesnous3"),image1:{url:v11,alt:"visage11"},col2:switchtext("quisommesnous4"),image2:{url:v12,alt:"visage11"}}}/>
    <Carousel props={{titre:"Témoignages",col:switchtext("Carousel2")}} />
        
    </>)
}

export default QuiSommesNous