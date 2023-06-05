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
    
    <div className='w-full h-[50px] border-b-2 border-white grid grid-cols-5 bg-[#DEE4E4]'>
        <div className='col-start-1 ml-[35px] mt-[px] flex items-start ' ><a href="/"><img src={logo} alt="logo"/></a></div>
        <div className='col-start-4 col-span-2 flex items-end'>
            <div className='flex flex-row text-lg space-x-3 ml-[80px] mt-[10px]'>
                <a href="/APropos">A propos</a>
                <a href="/Diagnostic">Diagnotic</a>
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