
import LayoutFullImage from '../components/Layout/LayoutFullImage';
import Layout1image from '../components/Layout/Layout1image';
import Layout2image from '../components/Layout/Layout2image';
import Layout3image from '../components/Layout/Layout3image';
import Conseil from '../components/Layout/Carousel';
import ExpertiseHome from '../components/ExpertiseHome';
import Newsletter from './../components/newsletter';

import {switchtext} from './../components/textdivers';

import fullvisage from "./../images/visage/fullvisage.png";
import visage2 from "./../images/visage/visage2.png";
import visage7 from "./../images/visage/visage7.png";
import visage8 from "./../images/visage/visage8.png";
import visage5 from "./../images/visage/visage5.png";

import produit1 from "./../images/produits/produit-01.png";
import produit2 from "./../images/produits/produit-05.png";
import produit3 from "./../images/produits/produit-06.png";
import Carousel from '../components/Layout/Carousel';
import Carousel2 from '../components/Layout/Carousel2';
const Home = ()=>{
    function itemCarousel(image,titre,col){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center">
                <div>
                    <p className="mt-[30px] text-[50px] font-av-bold text-blue ">{titre}</p>
                    <div className="mt-[20px] w-full flex center"> <img src={image}  alt="image"/></div>  
                    {col}    
                </div>
            </div>
            </>)

    }
    let listCarousel = [
        itemCarousel(visage5,"Nos conseils...",switchtext("Carousel1")),
        itemCarousel(visage5,"Expersite ...",switchtext("Carousel1")),
        itemCarousel(visage5,"Community ...",switchtext("Carousel1"))
    ]
    function item(item){
        return <div className="w-[240px] h-[70px] bg-[#264C4D] rounded-3xl flex center">
            <p className="text-[25px] text-white">{item}</p>
        </div>
    }
    return (<>
        <LayoutFullImage props={{titre:"DECOUVREZ VOTRE PEAU",button:<a href="/Diagnostic">FAIRE MON DIAGNOSTIC</a>,text1:"En complétant ce formulaire, vous autorisez xx à utiliser vos données personnelles, à vous adresser des offres et communications  par Po. email ou par SMS En savoir plus ",image1:{url:fullvisage,alt:"fullvisage"}}}/>
        <Layout1image props={{col1:switchtext("presentation"),image1:{url:visage2,alt:"visage2"}}} />
        <Layout2image props={{col1:switchtext("apropos"),col2:switchtext("apropos2"),image1:{url:visage7,alt:"visage7"},image2:{url:visage8,alt:"visage8"}}} />
        <div className='w-full flex center'>
            <div className='w-[80%]'>
                <Layout3image props={{titre:switchtext("produittitre"),col1:switchtext("produitcol1"),image1:{url:produit1,alt:"produit1"},col2:switchtext("produitcol2"),image2:{url:produit2,alt:"produit2"},col3:switchtext("produitcol3"),image3:{url:produit3,alt:"produit3"}}}/>
            </div>
        </div>
         <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
           
        <Carousel2 props={{items:listCarousel,nbShow:1,ratio:25,showPoint:true}}/>
        {/* <Carousel props={{titre:"Nos conseils...",col:switchtext("Carousel1")}} /> */}
        <ExpertiseHome />
       </>)
}

export default Home