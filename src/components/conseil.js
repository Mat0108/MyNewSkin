import visage from "../images/visage5.png"
import point from "../images/point.png"
const Conseil =()=>{
    return (<>
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        <div className="relative w-full h-fit mt-[10px] flex center">
            <div>
                <p className="mt-[30px] text-[40px] font-av-bold text-blue ">Nos conseils...</p>
                <div className="mt-[20px]"> <img src={visage}  /></div>  
                <p className="mt-[10px] text-[25px] font-av-bold text-blue">4 types de peau, 4 types de soins </p>    
                <p className="text-[16px]">Quel nettoyant choisir ? quel serum vous correspond ? </p>
                <p className="text-[16px]">Comprenez et accepter la nature de votre peau grâce à nos conseils ciblés pour vous.</p>  
                <div className="mt-[20px] w-full flex center"> <img src={point}  /></div>  
                    
            </div>
        </div>
        </>
    )
}
export default Conseil