
import { useState,useEffect } from "react";
const Carousel2 =({props})=>{
    // props : {{items,nbShow}}
    const [show,setShow]= useState(0)
    const [items,setItems] = useState()
    useEffect(() => {
        let i;
        let list = [];
        for (i=show;i<props.nbShow+show;i++){
            
            console.log(i>=Object.keys(props.items).length,Object.keys(props.items).length,i)
            if(i>=Object.keys(props.items).length){
                list.push(props.items[i-Object.keys(props.items).length])
            }else{
                list.push(props.items[i])
            }
        }
        setItems(list)
    }, [props.items,show])
    
    return (
        <div className="flex flex-row w-full">
            <div className="w-[7%] flex center">
                <p className="text-5xl" onClick={()=>setShow(show == 0 ? Object.keys(props.items).length :show-1)}>{"<"}</p>
            </div>
            <div className="flex flex-row w-[86%] h-full justify-between ">
                
                {items}
            </div>
            <div className="w-[7%] flex center">
                <p className="text-5xl" onClick={()=>setShow(show>=Object.keys(props.items).length ? 1:show+1)}>{">"}</p>
            </div>
        </div>
        
    )
}
export default Carousel2