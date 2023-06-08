    // import Routine from '../images/Routine.png'
    // import skincare from '../images/skincare.png'

import logo from '../images/logo.png';
import React from 'react';
//import { Badge } from "@material-ui/core";
//import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import { mobile } from "../responsive";

const Navbar = () =>{
    return (
    <>
    
    <div className='w-full h-[80px] border-b-2 border-white grid grid-cols-5 bg-[#DEE4E4] p-2'>
        <div className='col-start-1 ml-[35px] p-x-2 flex items-start ' ><a href="/" className='w-fit h-full'><img src={logo} alt="logo" className='h-full'/></a></div>
        <div className='col-start-4 col-span-2 flex '>
            <div className='flex flex-row text-lg space-x-3 ml-[80px] center '>
                <a href="/APropos">A propos</a>
                {/* <a href="/Diagnostic">Diagnotic</a> */}
                <a href="/Expertise">Expertise</a>
                <div>Conseils</div>
                <a href="/Community">Community</a>
                {/* <div>Soins</div>
                <div>Produits</div>
                <div>Connexion</div> */}
            </div>
        </div>
    </div>
    </>)
}
export default Navbar;