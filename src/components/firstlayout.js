    // import Routine from '../images/Routine.png'
    // import skincare from '../images/skincare.png'
import logo from '../images/logo.png'
const Firstlayout = () =>{
    return (
    <>
    
    <div className='w-full h-[50px] border-b-2 border-white grid grid-cols-5 bg-[#DEE4E4]'>
        <div className='col-start-1 ml-[35px] mt-[px] flex items-start '><img src={logo}/></div>
        <div className='col-start-4 col-span-2 flex items-start'>
            <div className='flex flex-row text-lg space-x-3 ml-[80px] mt-[10px]'>
                <div>Diagnotics</div>
                <div>Soins</div>
                <div>Produits</div>
                <div>Panier</div>
                <div>Connexion</div>
            </div>
        </div>
    </div>
    </>)
}
export default Firstlayout;