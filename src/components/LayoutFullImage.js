
const LayoutFullImage =({props})=>{
    return (<>
        <div className="relative w-full h-fit bg-[#DEE4E4]">
            <div className='w-full flex center'><img src={props.image1.url} alt={props.image1.alt}  /></div>
            <div className="absolute z-[1000] top-[300px] w-full h-[30px] text-white_coffee font-av-bold text-[70px] flex center"><p className="">{props.titre}</p></div>
            <div className="absolute z-[1000] top-[550px] w-full h-[60px] text-white_coffee text-[50px] flex center"><p className="w-[50%] py-2 bg-blue rounded-3xl">{props.button}</p> </div>
            <div className="absolute z-[1000] top-[680px] w-full h-[60px] text-white_coffee text-[15px] flex center"><p className="w-[70%]">{props.text1}</p> </div>
        
        </div>
  
    </>
    )
}
export default LayoutFullImage