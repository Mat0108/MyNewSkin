import buy from "../images/buy.png";
import visage5 from "../images/visage5.png"
import skincare from "../images/SkinCare1.png"
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
      return produitcol3();
    case "quisommesnous":
      return quisommesnous();
    case "quisommesnous2":
      return quisommesnous2();
    case "quisommesnous3":
      return quisommesnous3();
    case "quisommesnous4":
      return quisommesnous4();
    case "Carousel1":
      return Carousel1();
    case "Carousel2":
      return Carousel2();
    case "NotreHistoire":
      return NotreHistoire();
    case "EcoleDelphine":
      return EcoleDelphine();
    default:
      break;
  }
}
const presentation = ()=>{
    return (<>
      <p className="text-[100px] font-av-bold text-blue text-left w-[700px]">Po.</p>
      <p className="text-[50px] font-av-bold text-blue text-left w-[700px]">pour une belle peau</p>
      <p className="mt-[30px] text-[16px] text-left w-[700px]">
      Chez Po. nous sommes convaincus que prendre soin de sa peau devrait être à la portée de tous et de toutes.
      C’est pour cela que nous voulons rendre accessible les soins, les conseils, les expertises.
      </p>
      <p className="mt-[30px] text-[16px] text-left w-[700px]">
      Nous sommes fiers de mettre à votre disposition des formules de soins cleans et de vous mettre en contact avec  nos partenaires expert dans les problèmes de peaux. 
      </p>
      </>
    )
  }
const apropos=()=>{
    return (<>
    <p className="mt-[35px] text-[60px] font-av-bold text-blue text-left w-[600px]">A propos...</p>
    <p className="mt-[20px] text-[16px] text-left w-[600px]">Nous avons choisi de collaborer avec des experts facialistes pour VOUS !</p>
    <p className="text-[16px] text-left w-[600px]">Pour que vous puissez bénéficier d’un diagnostic fiable et personnalisé.</p>
    <p className="text-[16px] text-left w-[600px]">Vous pourrez donc vous orienter vers ce dont vous avez réellement besoin.</p>
    <div className="mt-[20px] text-[30px] w-fit px-8 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left"><p>en savoir plus</p></div>
    </>)
  }
const apropos2=()=>{
    return(<>
    <p className="mt-[20px] text-[16px] text-left w-[600px]"> En plus de pouvoir bénéficier d’un savoir-faire hors-pair, profitez également d’une technologie hors-pair !</p>
    <p className="mt-[20px] text-[16px]  text-left w-[600px]">L’Intelligence Artificielle saura parfaire votre diagnostic afin de le rendre encore   plus précis !
    Un simple selfie servira à déterminer la ligne directrice de votre diagnostic.</p>
    <div className="mt-[40px] text-[30px] w-fit px-8 py-2 bg-[#E4DDD3] rounded-2xl font-av-bold text-blue text-left w-[600px]"><p>en savoir plus</p></div>            
    </>)
}

const produittitre = ()=>{
  return(<>
    <div className="row-start-1 flex flex-col center">
      <p className="text-blue text-[50px] font-av-bold">Les iconiques...</p>
      <p className="text-blue text-[16px]">Découvrez notre gamme “Iconiques” avec nos produits incontournables, recommandés par notre fidèle communauté </p>
  </div></>)
}

const produitcol1 = ()=>{
  return(<>
  <p className="ml-[30px] mt-[35px] text-[30px] font-av-bold text-blue text-left">Sérum Yeux</p>
  <p className="ml-[30px] mt-[20px] text-[16px] text-left w-[300px]">Caféine 5% + Niacinamide 5%</p>
  <p className="ml-[30px] mt-[10px] text-[16px] text-left w-[350px]">Favorise la microcirculation sanguine et lymphatique pour atténuer les cernes.  </p>
  <div className="w-full ml-[30px] mt-[30px] flex flex-row">
      <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>        
      <div className="ml-[10px] text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left"><p>Je découvre</p></div>    
  </div>
  </>)
}

const produitcol2 = ()=>{
  return (<>
  <p className="ml-[30px] mt-[35px] text-[30px] font-av-bold text-blue text-left">Assemblage botanique </p>
  <p className="ml-[30px] text-[30px] font-av-bold text-blue text-left">tenseurau nopal</p>
  <p className="ml-[30px] mt-[10px] text-[16px] text-left w-[400px]">7 extraits botaniques pour tonifier et régénérer la peau pendant la nuit. Sérum de nuit visage et cou.</p>
  <div className="w-full ml-[30px] mt-[30px] flex flex-row">
      <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>        
      <div className="ml-[10px] text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left"><p>Je découvre</p></div>    
  </div>
  </>)
}

const produitcol3 = () =>{
  return (<>
  <p className="ml-[30px] mt-[35px] text-[30px] font-av-bold text-blue text-left">Gel nettoyant exfoliant</p>
  <p className="ml-[30px] mt-[20px] text-[16px] text-left w-[300px]">PHA 5% + aloe vera</p>
  <p className="ml-[30px] mt-[10px] text-[16px] text-left w-[400px]">Micro-exfolie la peau et stimule le renouvellement cellulaire pour désincruster les pores et unifier le teint.</p>
  <div className="w-full ml-[30px] mt-[30px] flex flex-row">
      <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>        
      <div className="ml-[10px] text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left"><p>Je découvre</p></div>    
  </div>
  </>)
}


const quisommesnous = () =>{
  return (<>
    <p className="text-[50px] font-av-bold text-blue text-center w-[700px]">Notre histoire</p>
      
  </>)
}
const quisommesnous2 = () =>{
  return (<>
    <p className="text-[50px] font-av-bold text-blue text-center w-full">NOTRE CONCEPT & NOTRE TEAM</p>
      
  </>)
}
const quisommesnous3 = () =>{
  return (<>
    <p className="mt-[32px] mb-[32px] text-[24px] font-av-bold text-blue text-center w-full">CONCEPT</p>
      
  </>)
}
const quisommesnous4 = () =>{
  return (<>
    <p className="mt-[32px] mb-[32px] text-[24px] font-av-bold text-blue text-center w-full">TEAM</p>
      
  </>)
}

const Carousel1 = () =>{
  return (<>
  <div className="mt-[20px]"> <img src={visage5} alt="visage5" /></div>  
  <p className="mt-[20px] text-[16px] font-av-bold text-blue">4 types de peau, 4 types de soins </p>    
  <p className="text-[16px]">Quel nettoyant choisir ? quel serum vous correspond ? </p>
  <p className="text-[16px]">Comprenez et accepter la nature de votre peau grâce à nos conseils ciblés pour vous.</p>  
  </>)
}

const Carousel2 = () =>{
  return (<>
    <div className="w-[686px] h-[300px] flex flex-row">
        <div className="w-[343px] h-full bg-white rounded-l-2xl">
          <p className="text-[30px] mt-[20px]">Marie du pont</p>
        </div>
        <div className="w-[343px] h-[300px]">
          <img src={skincare} alt="skincare"/>
        </div>
    </div>
  </>)
}
const NotreHistoire = ()=>{
  return <div>
      <p className="text-[50px] font-av-bold text-center w-[700px]">Notre histoire</p>
  </div>
}
const EcoleDelphine = ()=>{
  return <div>
      <p className="text-[40px] font-av-bold text-center w-[700px]">École Delphine Langlois</p>
      <p className="text-[40px] font-av-bold text-center w-[700px]">Facialiste Paris</p>
      <div className="flex center"><div className="mt-[120px] text-[30px] w-fit px-8 py-4 bg-[#83C5BE] rounded-full font-av-bold text-blue text-left"><p>en savoir plus</p></div>
      </div>
  </div>
}
export {switchtext}