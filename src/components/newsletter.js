import { useState } from "react"
import fleche from "../images/fleche.png"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,doc, setDoc } from 'firebase/firestore';

const Newsletter =()=>{
    const [value, setValue] = useState()
    const firebaseConfig = {
        apiKey: "AIzaSyA44Ehyz0Fu6pISrwKaI5rALkfAUr-LpQ8",
        authDomain: "landingpage-5f8fe.firebaseapp.com",
        projectId: "landingpage-5f8fe",
        storageBucket: "landingpage-5f8fe.appspot.com",
        messagingSenderId: "868071044023",
        appId: "1:868071044023:web:92d849caa07464ee2d6e32"
      };
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const userCol = collection(db, 'User');

      async function createUser(mail){
        const user = {
            mail: mail
          };
        // await db.collection('User').doc('User').set(user);
        await setDoc(doc(db, "User", mail), user).then(setValue(""));
      }
      
    return (<>

        <div className="relative w-full h-[360px] grid grid-cols-5 bg-[#D5CDC2]">
            <div id="mail" href=""></div>
            <div className="col-start-1 col-span-2 flex flex-col center ">
                <p className="text-[30px]">NEWSLETTER</p>
                <p className="w-[300px] ml-[30px]">Suivez notre actualité et ne manquez aucune de nos nouveautés en vous inscrivant à notre newsletter </p>
            </div>
            <div className="col-start-3 col-span-3 flex flex-col center ">
                <p className="text-[30px] w-[300px]">Votre adresse mail:</p>
                <div className="flex flex-row">
                    <input className="w-[600px] bg-[#D5CDC2] border-b-2 mt-5" placeholder="votre mail " value={value} onChange={e=>setValue(e.target.value)}></input>
                    <div className="mt-[20px] w-[40px] ml-[10px] flex center border-2 " onClick={()=>createUser(value)}> <img src={fleche}  /></div> 
                </div>
            </div>
        </div>
        </>
    )
}
export default Newsletter