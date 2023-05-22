const Layout1imageinv =({props})=>{
    return (
        <div className="relative w-full h-fit grid grid-cols-2 mt-[40px] ">
            
            <div className="col-start-1 ml-[30px] "> <img src={props.image1.url} alt={props.image1.alt}/></div>
            <div className="col-start-2 w bg-[#DEE4E4] flex center justify-start">
                <div className="flex flex-col ">
                    {props.col1}
                </div>
            </div>
        </div>
        
    )
}
export default Layout1imageinv