
const Layout2image =({props})=>{
    return (
        <>
        <div className="relative w-full h-0.5 bg-[#10264C4D]"></div>
        <div className="relative w-full h-fit grid grid-cols-2 mt-[20px] ">
            <div className="ml-[20px] col-start-1 w bg-[#DEE4E4] flex justify-start">
                <div className="flex flex-col ">
                    {props.col1}
                    <div className="w-[600px] ml-[30px] mt-[60px]"> <img src={props.image1.url} alt={props.image1.alt}  /></div>        
                </div>
            </div>
            <div className="col-start-2 w bg-[#DEE4E4] flex justify-start">
                <div className="ml-[60px] flex flex-col ">
                    <div className=" ml-[30px] mt-[10px]"> <img src={props.image2.url} alt={props.image2.alt}  /></div>        
                    {props.col2}
                </div>
            </div>
        </div>
        <div className="relative w-full h-0.5 mt-[50px] bg-[#10264C4D]"></div>
        </>
        
    )
}
export default Layout2image