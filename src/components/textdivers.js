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
    case "Commu":
      return Commu();
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
  return (<div className="h-[900px]">
    <p className="text-[50px] font-av-bold text-blue text-center w-[700px]">Notre histoire</p>
    <div className="w-[80%] h-full">
    <p className="mt-[20px]">Bienvenue sur notre site de conseil skincare et de suivi ! </p>
    <p className="mt-[20px]">Nous sommes ravis de vous accompagner dans votre parcours vers une peau saine et éclatante. Chez Po., nous croyons en l'importance d'une routine skincare adaptée à chaque peau et pour chaque individu, et nous sommes là pour vous guider à chaque étape.</p>

    <p className="mt-[20px]">Notre équipe de passionnés de skincare est composée d'experts qualifiés dans le domaine. Nous avons rassemblé leurs connaissances et leur expertise pour vous fournir des conseils personnalisés et des informations de qualité sur les soins de la peau.</p>

    <p className="mt-[20px]">Que vous soyez novice en matière de skincare ou que vous cherchiez à améliorer votre routine existante, nous avons tout ce dont vous avez besoin. Notre site regorge de ressources utiles, y compris des articles informatifs, des tutoriels vidéo, des guides d'achat et des recommandations de produits, des experts facialistes pouvant vous donner des conseils et assurer un suivi.</p>

    <p className="mt-[20px]">Nous comprenons que chaque peau est unique, c'est pourquoi nous mettons l'accent sur le suivi et les conseils personnalisés. Vous pouvez créer un compte sur notre site pour bénéficier d'un suivi individualisé de votre routine skincare. En répondant à quelques questions simples sur votre type de peau, vos préoccupations et vos objectifs, nous pourrons vous proposer des recommandations sur mesure et ajuster votre routine au fur et à mesure.</p>

    <p className="mt-[20px]">La transparence et la bienveillance sont des valeurs importantes chez Po.. Nous veillons à ce que toutes les informations que nous partageons soient basées sur des recherches scientifiques et des sources fiables. Nous collaborons avec des experts facialistes et des marques spécialistes de la peau pour vous offrir des conseils fiables et à jour.</p>

    <p className="mt-[20px]">Nous espérons que notre site vous inspirera à prendre soin de votre peau et à vous sentir bien dans votre peau. N'hésitez pas à explorer nos différentes sections, à poser des questions et à interagir avec notre communauté faite pour vous. Nous sommes là pour vous accompagner dans votre voyage vers une peau épanouie et radieuse.</p>

    <p className="mt-[20px]">Bienvenue dans la communauté Po. !</p>
    </div>
      
  </div>)
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

const Commu = ()=>{
  return <div className="w-[70%]">
    <p className="mt-[60px]"> Bienvenue dans la communauté Po. !</p>

    <p className="mt-[20px]"> Notre communauté est un espace dédié aux passionnés de soins de la peau qui voudraient des conseils beauté et skincare, où vous pouvez partager vos expériences, poser des questions, échanger des conseils et trouver une source d'inspiration pour prendre soin de votre peau et vous acceptez vous-mêmes.</p>

    <p className="mt-[20px]"> Ici, nous encourageons l'ouverture d'esprit, le respect mutuel et l'entraide. Que vous soyez un novice cherchant des conseils de base ou un expert partageant vos connaissances approfondies, vous êtes le bienvenu pour contribuer à agrandir notre communauté.</p>

    <p className="mt-[30px] text-left"> Dans cette communauté, vous pourrez :</p>

    <p className="mt-[20px] text-left "> <span className="font-av-bold">1. Poser des questions :</span> Vous avez une question sur un problème de peau spécifique ou sur l'utilisation d'un produit en particulier ? N'hésitez pas à poser vos questions et notre communauté se fera un plaisir de vous aider avec des réponses basées sur des expériences personnelles et des connaissances approfondies.</p>
    <p className="mt-[20px] text-left"> <span className="font-av-bold">2. Partager vos conseils :</span> Vous avez découvert une routine de soins de la peau efficace ou un produit coup de cœur ? Partagez vos astuces et recommandations avec les autres membres de la communauté. Votre expérience peut aider quelqu'un à trouver la solution parfaite pour sa peau.</p>
    <p className="mt-[20px] text-left"> <span className="font-av-bold">3. Raconter votre histoire :</span> Chaque peau a une histoire unique. Que vous ayez surmonté des problèmes de peau ou que vous ayez atteint un objectif spécifique, partagez votre parcours pour inspirer les autres membres de la communauté et leur montrer qu'ils ne sont pas seuls dans leur quête d'une peau saine et radieuse.</p>
    <p className="mt-[20px] text-left"> <span className="font-av-bold">4. Participer aux discussions : </span>Nos fils de discussion sont l'endroit idéal pour engager des conversations intéressantes sur les dernières tendances en matière de soins de la peau, partager des idées créatives et discuter des défis auxquels nous sommes confrontés dans notre quête d'une peau magnifique. </p>
    <p className="mt-[20px] text-left"> <span className="font-av-bold">5. Découvrir de nouvelles ressources :</span>En plus des discussions de la communauté, nous vous proposons des articles informatifs, des tutoriels et des revues de produits pour vous tenir au courant des dernières tendances et des meilleurs conseils en matière de soins de la peau.</p>

    <p className="mt-[40px]"> Rejoignez notre communauté dès aujourd'hui et faites partie d'un groupe de personnes passionnées qui se soutiennent mutuellement dans leur voyage vers une peau saine, éclatante et confiante. Ensemble, nous pouvons échanger des connaissances, partager des expériences et célébrer les réussites, car une belle peau est un voyage que nous faisons ensemble.</p>
  </div>
}
export {switchtext}