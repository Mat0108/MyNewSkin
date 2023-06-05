
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
import v7 from "./../images/visage7.png";
import v8 from "./../images/visage8.png";
import search from "./../images/search.png";
import love from "./../images/love.png";
import partage from "./../images/partage.png";
import comment from "./../images/comment.png";

import v20 from "./../images/visage20.png";
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
        itemCarousel(v2,"Diagnostic"),
        itemCarousel(v3,"Conseil"),
        itemCarousel(v4,"Soin"),
        itemCarousel(v8,"Produits"),
        itemCarousel(v14,"Diagnostic"),
        itemCarousel(v15,"Conseil"),
        itemCarousel(v16,"Soin"),
        itemCarousel(v7,"Produits"),
        
    ]
    function item(item){
        return <div className="w-[240px] h-[70px] bg-[#264C4D] rounded-3xl flex center">
            <p className="text-[25px] text-white">{item}</p>
        </div>
    }
    function explorerItem(image,text,value,categorie){
        return(
            <div className="w-full h-[440px] mb-[20px] flex rounded-[40px] mt-[40px]">
                <div className="w-[30%] h-full">
                    <img src={image} alt={image} className="w-full h-full rounded-l-[40px]"/>
                </div>
                <div className="w-[70%] h-full relative flex flex-col border-r-2 border-y-2 border-black rounded-r-[40px] p-8">
                    <div className="w-full h-[60%] text-[24px] text-left">
                        {text}
                    </div>
                    <div className="w-full h-[20%] ">
                        <p className="text-left text-[24px] ">Catégorie : {categorie}</p>
                    </div>
                    <div className="w-[250px] h-[40px] flex flex-row justify-between">
                        <div className="flex flex-row">
                            <img src={love} alt={"love"} className="w-[40px] h-[40px]"/>
                            <div className="flex content-end"><p className="ml-[5px] w-fit h-fit" >{value.love ? value.love : 0}</p></div>
                        </div>
                        <div className="flex flex-row">
                            <img src={comment} alt={"comment"} className="w-[40px] h-[40px]"/>
                            <div className="flex content-end"><p className="ml-[5px] w-fit h-fit" >{value.comment ? value.comment : 0}</p></div>
                        </div>
                        <div className="flex flex-row">
                            <img src={partage} alt={"partage"} className="w-[40px] h-[40px]"/>
                            <div className="flex content-end"><p className="ml-[5px] w-fit h-fit" >{value.partage ? value.partage : 0}</p></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    return (<>
        <LayoutFullImage props={{titre:"MA COMMUNAUTÉ",image1:{url:v17,alt:"visage17"}}}/>
        <div className="w-full flex center mt-[100px]">
            <div className="w-[80%] flex flex-col ">
                <p className="text-[50px]">La communauté qui te ressemble</p>
                <div className='w-full flex center mt-[60px]'><img src={v18} alt={"v18"} className="w-full"/></div>
                <div className="w-full flex center ">{switchtext("Commu")}</div>
                <div className="flex center mt-[60px]"><div className="text-[36px] w-fit px-8 py-4 bg-[#264C4D] rounded-full font-av-bold text-white text-left"><p>Rejoigner la communauté</p></div></div>
                <div className=" flex flex-row center mt-[80px] mb-[80px]">

                    <div className="w-[220px] h-[220px]">
                    <img src={v19} alt="v19" className="w-full h-full"/>
                    </div>
                <div className="w-[1100px] h-[220px] bg-white rounded-r-3xl p-4 flex flex-col">
                    <div className="text-[36px] font-av-bold text-left">Nouveau venu ?</div>
                    <div className="h-[10px]"></div>
                    <div className="text-[30px] mt-[1Opx] font-av-bold text-left">On vous montre comment ça marche ?</div>
                </div>
                </div>
            </div>
        </div>
        <div className="w-[80%] flex flex-col mx-auto mb-[20px]">
            <p className="text-[50px] text-left text-blue font-av-bold">Pour bien démarrer sur la commununauté</p>
        </div>
        <Carousel2 props={{items:listCarousel,nbShow:4}}/>
        <div className="w-[80%] mx-auto mt-[50px]">
            <p className="text-[50px] text-left text-blue font-av-bold">Explorer</p>
            <div className="border-2 border-blue rounded-3xl w-full h-[62px] flex flex-row relative">
                <div className="w-[10%] h-fit p-4 flex center relative">
                    <img src={search} alt={search} height={30} width={30}/>
                </div>
                <div className="w-[90%] h-fit flex relative">
                    <p className="text-black text-[40px]">Recherche dans la communauté</p>
                </div>
            </div>
            <div className="w-full h-full my-[30px] flex flex-row justify-between">
                {item("Diagnostic")}
                {item("Conseil")}
                {item("Soin")}
                {item("Produits")}
                {item("Acnès")}
            </div>
        </div>
        <div className="w-full h-[3px] bg-gray mb-[5px]"></div>
        <div className="w-full h-fit ">
            <div className="w-[80%] mx-auto mt-[40px]">
                <div className="border-2 border-blue rounded-full w-[740px] h-[62px] px-8 py-2 flex flex-row relative"> 
                    <div className="w-full h-fit flex relative">
                        <p className="text-black text-[28px]">Léa community manager : à posté une photo</p>
                    </div>
                </div>
                {explorerItem(v20,"",{love:25,comment:18,partage:10},"Acnès & soins")}

                {explorerItem(v19,"",{love:14,comment:38,partage:4},"Soins")}
            </div>

            </div>
            
        </>
    )
}
export default Commu;