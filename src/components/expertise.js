import visage from "../images/visage6.png"
import partenaire1 from "../images/partenaire1.png"
import partenaire2 from "../images/partenaire2.png"
import partenaire3 from "../images/partenaire3.png"

const Expertise =()=>{
    return (<>
        <div className="relative w-full h-fit mt-[10px] grid grid-cols-4 bg-blue">
            <div className="col-start-1">
                <div className="mt-[20px] w-full flex center"> <img src={visage}  /></div>  
            </div>
            <div className="col-start-2 col-span-3">
                <p className="mt-[80px] text-[20px] text-white font-av-bold">NOTRE EXPERTISE</p>
                <p className="ml-[10%] w-[80%] text-white">Nos partenaires sont diplômés et reconnus comme des Experts dans leur domaine et garantissent une prise en charge honnête et réfléchie</p>
                <div className="w-[80%] mt-[40px] ml-[15%] grid grid-cols-3 ">
                    <div className="col-start-1 w-[180px] flex flex-col center">
                        <p className="text-white text-[15px]">Certification - Académie des Facialistes - Paris</p>
                        <div className="mt-[20px]"> <img src={partenaire1}  /></div>  
                    </div>
                    <div className="col-start-2 w-[180px] flex flex-col center">
                        <p className="text-white text-[15px]">Certification - Académie des Facialistes - Paris</p>
                        <div className="mt-[20px]"> <img src={partenaire2}  /></div>  
                    </div>
                    <div className="col-start-3 w-[180px] flex flex-col center">
                        <p className="text-white text-[15px]">Certification - Académie des Facialistes - Paris</p>
                        <div className="mt-[10px]"> <img src={partenaire3}  /></div>  
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Expertise