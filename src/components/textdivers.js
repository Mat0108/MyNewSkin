import buy from "../images/buy.png"
const switchtext=(params)=>{
  switch(params){
    case "presentation":
      return presentation();
    case "apropos":
      return apropos();
    case "apropos2":
      return apropos2();
    case "produittitre":
      return produittitre();
    case "produitcol1":
      return produitcol1()
    case "produitcol2":
      return produitcol2(); 
    case "produitcol3":
      return produitcol3()
  }
}
const presentation = ()=>{
    return (<>
      <p className="ml-[30px] text-[50px] font-av-bold text-blue text-left">Po.</p>
      <p className="ml-[30px] text-[40px] font-av-bold text-blue text-left">pour une belle peau</p>
      <p className="ml-[30px] mt-[30px] text-[14px] text-left w-[600px]">
      Chez Po. nous sommes convaincus que prendre soin de sa peau devrait être à la portée de tous et de toutes.
      C’est pour cela que nous voulons rendre accessible les soins, les conseils, les expertises.
      </p>
      <p className="ml-[30px] mt-[30px] text-[14px] text-left w-[500px]">
      Nous sommes fiers de mettre à votre disposition des formules de soins cleans et de vous mettre en contact avec  nos partenaires expert dans les problèmes de peaux. 
      </p>
      </>
    )
  }
const apropos=()=>{
    return (<>
    <p className="ml-[30px] mt-[35px] text-[40px] font-av-bold text-blue text-left">A propos...</p>
    <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[400px]">Nous avons choisi de collaborer avec des experts facialistes pour VOUS !</p>
    <p className="ml-[30px] text-[10px] text-left w-[400px]">Pour que vous puissez bénéficier d’un diagnostic fiable et personnalisé.</p>
    <p className="ml-[30px] text-[10px] text-left w-[400px]">Vous pourrez donc vous orienter vers ce dont vous avez réellement besoin.</p>
    <div className="ml-[30px] mt-[20px] text-[30px] w-fit px-8 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>
    </>)
  }
const apropos2=()=>{
    return(<>
    <p className="ml-[30px] mt-[20px] text-[10px] text-left text-xl "> En plus de pouvoir bénéficier d’un savoir-faire hors-pair, profitez également d’une technologie hors-pair !</p>
    <p className="ml-[30px] mt-[20px] text-[10px] w-[400px] text-left ">L’Intelligence Artificielle saura parfaire votre diagnostic afin de le rendre encore   plus précis !
    Un simple selfie servira à déterminer la ligne directrice de votre diagnostic.</p>
    <div className="ml-[30px] mt-[40px] text-[30px] w-fit px-8 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>            
    </>)
}

const produittitre = ()=>{
  return(<>
    <div className="row-start-1 flex flex-col center">
      <p className="text-blue text-[30px] font-av-bold">Les iconiques...</p>
      <p>Découvrez notre gamme “Iconiques” avec nos produits incontournables, recommandés par notre fidèle communauté </p>
  </div></>)
}

const produitcol1 = ()=>{
  return(<>
  <p className="ml-[30px] mt-[35px] text-[40px] font-av-bold text-blue text-left">Sérum Yeux</p>
  <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[300px]">Caféine 5% + Niacinamide 5%</p>
  <p className="ml-[30px] mt-[10px] text-[10px] text-left w-[300px]">Favorise la microcirculation sanguine et lymphatique pour atténuer les cernes.  </p>
  <div className="w-full ml-[30px] mt-[30px] flex flex-row">
      <div className="w-[40px] ml-[10px]"> <img src={buy}  /></div>        
      <div className="ml-[10px] text-[10px] w-fit px-4 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>    
  </div></>)
}

const produitcol2 = ()=>{
  return (<>
  <p className="ml-[30px] mt-[35px] text-[30px] font-av-bold text-blue text-left">Assemblage botanique tenseurau nopal</p>
  <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[300px]">7 extraits botaniques pour tonifier et régénérer la peau pendant la nuit. Sérum de nuit visage et cou.</p>
  <div className="w-full ml-[30px] mt-[30px] flex flex-row">
  <div className="w-[40px] ml-[10px]"> <img src={buy}  /></div>        
  <div className="ml-[10px] text-[10px] w-fit px-4 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>    
  </div></>)
}

const produitcol3 = () =>{
  return (<>
  <p className="ml-[30px] mt-[35px] text-[40px] font-av-bold text-blue text-left">Gel nettoyant exfoliant</p>
  <p className="ml-[30px] mt-[20px] text-[10px] text-left w-[300px]">PHA 5% + aloe vera</p>
  <p className="ml-[30px] mt-[10px] text-[10px] text-left w-[300px]">Micro-exfolie la peau et stimule le renouvellement cellulaire pour désincruster les pores et unifier le teint.</p>
  <div className="w-full ml-[30px] mt-[30px] flex flex-row">
      <div className="w-[40px] ml-[10px]"> <img src={buy}  /></div>        
      <div className="ml-[10px] text-[10px] w-fit px-4 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>    
  </div>
  </>)
}
export {switchtext}