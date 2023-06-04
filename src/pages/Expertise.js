
import ExpertiseHome from "../components/ExpertiseHome";
import Layout1image from "../components/Layout1image";
import Layout1imageinv from "../components/Layout1imageinv";
import LayoutFullImage from "../components/LayoutFullImage";
import { switchtext } from "../components/textdivers";
import v13 from "./../images/visage13.png";
import v14 from "./../images/visage14.png";
import v15 from "./../images/visage15.png";
import v16 from "./../images/visage16.png";
const Expertise = ()=>{
    return (<>
        <LayoutFullImage props={{titre:"NOTRE EXPERTISE",image1:{url:v13,alt:"visage13"}}}/>
        <Layout1image props={{col1:switchtext("NotreHistoire"),image1:{url:v14,alt:"visage14"}}} />
        <ExpertiseHome/>
        <Layout1imageinv props={{col1:switchtext("EcoleDelphine"),image1:{url:v15,alt:"visage15"}}}/>
        <Layout1image props={{col1:switchtext("NotreHistoire"),image1:{url:v16,alt:"visage16"}}} />
        </>
    )
}
export default Expertise;