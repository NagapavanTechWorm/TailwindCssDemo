export const Card = ({name,price,plan})=>{
    return(
        <div className="py-5 px-4 w-full rounded-lg shadow-lg flex flex-col justify-evenly text-center hover:scale-105 duration-300 ">
            <h2 className="text-bold text-2xl m-2" >{name}</h2>
            <h1 className="text-bold text-3xl m-2">{price}</h1>
            <div className="my-6 text-bold flex flex-col justify-evenly">
                {plan.map((item)=>{
                    return <div className="flex flex-col justify-evenly gap-5 ">
                        <p className="border-t-2">{item.size}</p>
                        <p className="border-t-2">{item.user}</p>
                        <p className="border-t-2">{item.send}</p>
                    </div>
                })}
            </div>
            <div className="flex justify-center">
            <button className="bg-[#00df9a] text-black p-2 w-35  text-bold rounded-md hover:bg-black  hover:text-[#00df9a]">Start Trail</button>
            </div>
        </div>
    )
}