
const Layout2col =({props})=>{
    
    return (
        <div className="relative w-full h-fit grid grid-row-2 mt-[10px] mt-[50px]">
            <div className="w-full">{props.titre}</div>
            <div className="mx-auto w-fit row-start-2 grid grid-cols-2 gap-[160px]">
                <div className="col-start-1 w bg-[#DEE4E4] flex justify-start">
                    <div className="flex flex-col ">
                        <div className="ml-[30px] mt-[60px]"> <img src={props.image1.url} alt={props.image1.alt}  /></div>        
                        {props.col1}
                    </div>
                </div>
                <div className="col-start-2 w bg-[#DEE4E4] flex justify-start">
                    <div className="flex flex-col ">
                        <div className="ml-[30px] mt-[60px]"> <img src={props.image2.url} alt={props.image2.alt}  /></div>        
                        {props.col2}
                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default Layout2col