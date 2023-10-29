export const NewLetter = ()=>{
    return(
        <div className="bg-black w-full py-16 px-2">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 text-white">
                <div className="flex flex-col m-4 items-start justify-start">
                    <h1 className="text-bold text-xl sm:text-bold-200 sm:font-bold md:text-4xl">Want tips & tricks to optimize your flow ?</h1>
                    <p className="text-gray-300 pt-1">Sign up to our NewLetter and stay up to date.</p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex items-center justify-start">
                        <input className="p-1.5 md:w-[500px] px-2 rounded-md m-2 text-black" type="email" placeholder="Enter your email" />
                        <button className="bg-[#00df9a] h-10 px-1 text-sm rounded-md m-2">Notify me</button>
                    </div>
                    <div className="p-2 flex flex-col justify-start"> 
                        <p className="">We Care about the protection of data</p>
                        <p className="text-[#00df9a]">Privacy Policy</p>
                    </div>
                </div>
                    
            </div>
        </div>
    )   
}