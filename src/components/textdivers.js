import buy from "../images/buy.png";
import visage5 from "../images/visage/visage5.png"
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
    case "Carousel3":
      return Carousel3();
    case "NotreHistoire":
      return NotreHistoire();
    case "EcoleDelphine":
      return EcoleDelphine();
    case "Commu":
      return Commu();
    case "Commu1":
      return Commu1();
    default:
      break;
  }
}
const presentation = ()=>{
    return (<>
      <p className="text-[100px] font-av-bold text-blue text-left ">Po.</p>
      <p className="text-[50px] font-av-bold text-blue text-left ">Pour une belle peau</p>
      <p className="mt-[30px] text-[16px] text-left ">
      Chez Po. nous sommes convaincus que prendre soin de sa peau devrait être à la portée de tous et de toutes.
      </p><p className="mt-[10px] text-[16px] text-left ">C’est pour cela que nous voulons rendre accessible les soins, les conseils, les expertises.
      </p>
      <p className="mt-[30px] text-[16px] text-left ">
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
    <div className="mt-[20px] text-[30px] w-fit px-8 py-2 bg-[#83C5BE] rounded-full font-av-bold text-blue text-left hover:text-white hover:bg-blue"><p>En savoir plus</p></div>
    </>)
  }
const apropos2=()=>{
    return(<>
    <p className="mt-[20px] text-[16px] text-left w-[600px]"> En plus de pouvoir bénéficier d’un savoir-faire hors-pair, profitez également d’une technologie hors-pair !</p>
    <p className="mt-[20px] text-[16px]  text-left w-[600px]">L’Intelligence Artificielle saura parfaire votre diagnostic afin de le rendre encore   plus précis !
    Un simple selfie servira à déterminer la ligne directrice de votre diagnostic.</p>
    <div className="mt-[40px] text-[30px] w-fit px-8 py-2 bg-[#83C5BE] rounded-full font-av-bold text-blue text-left w-[600px] hover:text-white hover:bg-blue"><p>En savoir plus</p></div>            
    </>)
}

const produittitre = ()=>{
  return(<>
    <div className="row-start-1 flex flex-col center">
      <p className="text-blue text-[50px] font-av-bold">Les iconiques</p>
      <p className="text-blue text-[16px]">Découvrez notre gamme “Iconiques” avec nos produits incontournables, recommandés par notre fidèle communauté </p>
  </div></>)
}

const produitcol1 = ()=>{
  return(<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-av-bold text-blue text-left">Sérum Yeux</p>
  <p className="mx-auto mt-[20px] w-[350px] text-[16px] text-left">Caféine 5% + Niacinamide 5%</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left">Favorise la microcirculation sanguine et lymphatique pour atténuer les cernes.  </p>
  <div className="w-[270px] mt-[30px] flex flex-row center">
      {/* <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>         */}
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>Je découvre</p></div>    
  </div>
  </>)
}

const produitcol2 = ()=>{
  return (<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-av-bold text-blue text-left">Assemblage botanique </p>
  <p className="mx-auto text-[30px] w-[350px] font-av-bold text-blue text-left">tenseurau nopal</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left ">7 extraits botaniques pour tonifier et régénérer la peau pendant la nuit. Sérum de nuit visage et cou.</p>
  <div className="w-[340px] mt-[10px] flex flex-row center">
      {/* <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>         */}
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>Je découvre</p></div>    
  </div>
  </>)
}

const produitcol3 = () =>{
  return (<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-av-bold text-blue text-left">Gel nettoyant exfoliant</p>
  <p className="mx-auto mt-[20px] w-[350px] text-[16px] text-left ">PHA 5% + aloe vera</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left ">Micro-exfolie la peau et stimule le renouvellement cellulaire pour désincruster les pores et unifier le teint.</p>
  <div className="w-[330px] mt-[10px] flex flex-row center">
      {/* <div className="w-[40px] ml-[10px] my-auto"> <img src={buy}  /></div>         */}
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-av-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>Je découvre</p></div>    
  </div>
  </>)
}


const quisommesnous = () =>{
  return (<div className="">
    <p className="text-[50px] font-av-bold text-blue text-left w-[50%]">Notre histoire</p>
    <p className="text-[50px] font-av-bold text-blue text-left w-[50%]">et votre histoire</p>
    <div className="w-[85%] h-full text-left text-[16px]">
    <p className="mt-[20px]">Chez Po, nous mettons tout en œuvre pour vous offrir une expérience de soin de peau exceptionnelle. Notre équipe dévouée d'experts en skincare est là pour vous accompagner à chaque étape de votre parcours. Que vous cherchiez à résoudre des problèmes de peau spécifiques, à améliorer votre routine existante ou à découvrir de nouveaux produits, nous sommes là pour vous guider.</p>
    <p className="mt-[20px]">Grâce à notre expertise et à notre passion pour la peau, nous vous proposons des conseils personnalisés, des recommandations de produits adaptés à votre type de peau et des informations de qualité basées sur des recherches scientifiques. Nous croyons en l'importance de la transparence et de l'éducation, c'est pourquoi nous partageons des ressources utiles et des guides d'achat détaillés pour vous aider à prendre des décisions éclairées.</p>
    <p className="mt-[20px]">En nous rejoignant, vous bénéficierez également de l'accès à notre communauté d'experts facialistes et d'autres passionnés de skincare. Vous pourrez échanger des conseils, partager votre expérience et trouver du soutien tout au long de votre parcours de soin de peau.</p> 
    <p className="mt-[20px]">Chez Po, nous sommes là pour vous aider à atteindre une peau saine, équilibrée et rayonnante.</p>
 
  </div>
  <div className="w-[70%] mt-[20px] flex center"><div className="ml-[10px] text-[30px] w-fit px-6 py-2 bg-[#83C5BE] rounded-full font-av-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>En savoir plus</p></div></div>   
      
  </div>)
}
const quisommesnous2 = () =>{
  return (<>
    <p className="text-[50px] font-av-bold text-blue text-center w-full">NOTRE CONCEPT & NOTRE TEAM</p>
      
  </>)
}
const quisommesnous3 = () =>{
  return (<div className="w-[450px]">
    <p className="mt-[32px] mb-[32px] text-[24px] font-av-bold text-blue text-center w-full">CONCEPT</p>
    <div className=""><p className="mt-[32px] mb-[32px] text-[16px] font-av-bold text-blue text-center w-full">Po. est bien plus qu'une simple application de soins de la peau, c'est une véritable solution complète pour vous accompagner dans votre parcours de beauté. Avec Po, vous avez accès à une multitude d'outils et de ressources pour prendre soin de votre peau de manière personnalisée et efficace.</p>
    </div>
      
  </div>)
}
const quisommesnous4 = () =>{
  return (<div className="w-[450px]">
    <p className="mt-[32px] mb-[32px] text-[24px] font-av-bold text-blue text-center w-full">TEAM</p>
    <div className=""><p className="mt-[32px] mb-[32px] text-[16px] font-av-bold text-blue text-center w-full">Nous sommes une équipe passionnée et dévouée, composée d'experts en soins de la peau, de spécialistes en technologie et de professionnels du marketing. Notre objectif principal est de vous offrir une expérience personnalisée et de haute qualité, en vous proposant les meilleurs conseils, produits et services pour prendre soin de votre peau.</p>
    </div>
  </div>)
}

const Carousel1 = () =>{
  return (<>
  <p className="mt-[20px] text-[16px] font-av-bold text-blue">4 types de peau, 4 types de soins </p>    
  <div className=" h-[120px]"><p className="text-[16px] mt-[5px]">Quel nettoyant choisir ? quel serum vous correspond ? </p>
  <p className="text-[16px]">Comprenez et accepter la nature de votre peau grâce à nos conseils ciblés pour vous.</p>  
  </div>
  </>)
}

const Carousel2 = () =>{
  return (<>
  <p className="mt-[20px] text-[16px] font-av-bold text-blue"> Bien choisir son masque  </p>    
  <p className="text-[16px] w-[80%] mx-auto mt-[5px] h-[120px]">Les masques sont devenus un incontournable de nos routines de soins de la peau, offrant une expérience indulgente et des bienfaits immédiats. Que vous recherchiez une hydratation intense, une purification en profondeur ou un éclat instantané, il existe un masque adapté à vos besoins spécifiques.</p>
  
  </>)
}
const Carousel3 = () =>{
  return (<>
  <p className="mt-[20px] text-[16px] font-av-bold text-blue">Une solution contre l'acné ?</p>    
  <p className="text-[16px]  w-[80%] mx-auto mt-[5px] h-[120px]">L'acné est un problème de peau courant qui peut affecter notre confiance en nous. Mais saviez-vous qu'il existe des solutions naturelles pour traiter l'acné et retrouver une peau saine et équilibrée. Nous allons explorer les remèdes naturels les plus efficaces pour lutter contre l'acné, en mettant l'accent sur des ingrédients naturels et des méthodes douces pour apaiser et réduire les imperfections cutanées.</p>
  </>)
}


// const Carousel2 = () =>{
//   return (<>
//     <div className="w-[686px] h-[300px] flex flex-row">
//         <div className="w-[343px] h-full bg-white rounded-l-2xl">
//           <p className="text-[30px] mt-[20px]">Marie du pont</p>
//           <p className="text-[16px] mx-auto mt-[20px] w-[90%]">"Je suis totalement bluffé par l'efficacité de Po. En suivant leurs conseils, ma peau a retrouvé son éclat naturel et mes problèmes de peau ont disparu. J'adore l'approche personnalisée de Po, qui s'adapte parfaitement à mes besoins.. "</p>
//         </div>
//         <div className="w-[343px] h-[300px]">
//           <img src={skincare} alt="skincare"/>
//         </div>
//     </div>
//   </>)
// }
const NotreHistoire = ()=>{
  return <div>
      <p className="text-[50px] font-av-bold text-center w-[700px]">Notre histoire</p>
  </div>
}
const EcoleDelphine = ()=>{
  return <div>
      <p className="text-[40px] font-av-bold text-center w-[700px]">École Delphine Langlois</p>
      <p className="text-[40px] font-av-bold text-center w-[700px]">Facialiste Paris</p>
      <div className="flex center"><div className="mt-[120px] text-[30px] w-fit px-8 py-4 bg-[#83C5BE] rounded-full font-av-bold text-blue text-left hover:text-white hover:bg-blue"><p>En savoir plus</p></div>
      </div>
  </div>
}

const Commu = ()=>{
  return <div className="w-[100%] mt-[10px]">
    <p className="text-[22px]">
    Notre communauté est un espace dédié aux passionnés de soins de la peau qui voudraient des conseils beauté et skincare, où vous pouvez partager vos expériences, poser des questions, échanger des conseils et trouver une source d'inspiration pour prendre soin de votre peau et vous acceptez vous-mêmes. Ici, nous encourageons l'ouverture d'esprit, le respect mutuel et l'entraide. 
Vous êtes le bienvenu pour contribuer à agrandir notre communauté.
    </p>
 </div>
}
const Commu1 = ()=>{
  return <>
  <div className="font-av-bold text-[28px]">
    Gagnez de la confiance en soi malgré votre acné
  </div>
  <div className="text-[26px] mt-[10px]">
    Votre beauté ne se résume pas à votre peau. L'acné peut être un défi, mais vous êtes bien plus que cela. Apprenez à vous aimer et à embrasser votre individualité. La confiance en soi ne dépend pas de votre apparence, mais de la façon dont vous vous percevez et vous affirmez. 
  </div>
  </>
}
export {switchtext}