
import LayoutFullImage from '../components/Layout/LayoutFullImage';
import Layout1image from '../components/Layout/Layout1image';
import Layout2image from '../components/Layout/Layout2image';
import Layout3image from '../components/Layout/Layout3image';
import Conseil from '../components/Layout/Carousel';
import ExpertiseHome from '../components/ExpertiseHome';
import Newsletter from './../components/newsletter';

import {switchtext} from './../components/textdivers';

import fullvisage from "./../images/fullvisage.png";
import visage2 from "./../images/visage2.png";
import visage7 from "./../images/visage7.png";
import visage8 from "./../images/visage8.png";
import produit1 from "./../images/produit1.png";
import produit2 from "./../images/produit2.png";
import produit3 from "./../images/produit3.png";
import Carousel from '../components/Layout/Carousel';
const Home = ()=>{
    return (<>
        <LayoutFullImage props={{titre:"DECOUVREZ VOTRE PEAU",button:<a href="/Diagnostic">FAIRE MON DIAGNOSTIC</a>,text1:"En complétant ce formulaire, vous autorisez xx à utiliser vos données personnelles, à vous adresser des offres et communications  par Po. email ou par SMS En savoir plus ",image1:{url:fullvisage,alt:"fullvisage"}}}/>
        <Layout1image props={{col1:switchtext("presentation"),image1:{url:visage2,alt:"visage2"}}} />
        <Layout2image props={{col1:switchtext("apropos"),col2:switchtext("apropos2"),image1:{url:visage7,alt:"visage7"},image2:{url:visage8,alt:"visage8"}}} />
        <Layout3image props={{titre:switchtext("produittitre"),col1:switchtext("produitcol1"),image1:{url:produit1,alt:"produit1"},col2:switchtext("produitcol2"),image2:{url:produit2,alt:"produit2"},col3:switchtext("produitcol3"),image3:{url:produit3,alt:"produit3"}}}/>
        <Carousel props={{titre:"Nos conseils...",col:switchtext("Carousel1")}} />
        <ExpertiseHome />
       </>)
}

export default Home