import logo from "../images/logo.png"
import tiktok from "../images/tiktok.png"
import instagram from "../images/instagram.png"
import pinterest from "../images/pinterest.png"
const Lastlayout = ()=>{
    return (
    <footer className="p-4 pb-10 bg-white_coffee grid grid-cols-6">
        <div className="col-start-1 col-span-2 flex flex-col center ">
            <div>
                    <div className="mt-[20px]"> <img src={logo}  /></div>
                    <p className="w-[90px] my-[10px]">Politiques et confidentialité</p>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-start-1"> <img src={tiktok}  /></div>
                        <div className="col-start-2"> <img src={instagram}  /></div>
                        <div className="col-start-3"> <img src={pinterest}  /></div>
                    </div>
            </div>  
        </div>
        <div className="col-start-3 mt-[20px] text-left "> 
            <div>
                <p className="font-av-bold text-[30px]">Menu</p>
                <p className="mt-[10px] text-[12px]">Expert facialiste</p>
                <p className="text-[12px]">Diagnostiques</p>
                <p className="text-[12px]">Soins</p>
                <p className="text-[12px]">Panier</p>
            </div>
        </div>
        <div className="col-start-4 mt-[20px] text-left "> 
            <div>
                <p className="font-av-bold text-[30px]">Découvrir Po.</p>
                <p className="mt-[10px] text-[12px]">Notre histoire</p>
                <p className="text-[12px]">Charte de formulation</p>
                <p className="text-[12px]">Philosophie de nos emballages</p>
                <p className="text-[12px]">Expert facialiste</p>
            </div>
        </div>   
        <div className="col-start-5 mt-[20px] text-left "> 
            <div>
                <p className="font-av-bold text-[28px]">Avis et évaluations</p>
                <p className="mt-[10px] text-[12px]">Expertise</p>
                <p className="text-[12px]">Avis Clients</p>
            </div>
        </div> 
        <div className="col-start-6 mt-[20px] text-left "> 
            <div>
                <p className="font-av-bold text-[30px]">Nous rejoindre</p>
                <p className="mt-[10px] text-[12px]">Rejoindre l'équipe</p>
                <p className="text-[12px]">Affilation</p>
                <p className="text-[12px]">Communauté</p>
            </div>
        </div> 
    </footer>
    )
}
export default Lastlayout;