export const Div = ({srcImg, alt, h2, p, ladoImg}) => {
    return (
        
        <>
             {ladoImg === "Direito" ? ( 
             <div className="flex flex-col-reverse justify-center items-center text-center mr-[1rem] mb-[1rem] lg:flex-row lg:gap-[1rem]">
                <div className="p-[1.5rem] " >
                    <h2 className="text-[1.5rem] lg:text-[1.6rem]  font-bold 2xl:text-[1.8rem]">{h2}</h2>
                    <p className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] text-center lg:m-auto lg:mt-[0.7rem]">{p}</p>
                </div>
                <img src={srcImg} alt={alt} className="w-[70%]"/>
             </div>   
            ) : (
                <div className="flex flex-col justify-center items-center text-center pl-[0.5rem] mb-[1rem] lg:flex-row lg:gap-[1rem]">
                   
                        <img src={srcImg} alt={alt} className="w-[70%]"/>
               
                <div className="flex flex-col">
                <h2 className="text-[1.5rem] lg:text-[1.6rem] font-bold  2xl:text-[1.8rem] ">{h2}</h2>
                <p className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] lg:w-[90%] text-center m-auto mt-[0.7rem]">{p}</p>
                </div>
             </div>   
             )
            }
        </>
       
    )
}