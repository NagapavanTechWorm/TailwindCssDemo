import Typed from 'react-typed'

const Hero = ()=>{
    return(
        <div className="text-white">
            <div className="max-w-[800px] h-screen mt-[-96px] mx-auto text-center flex flex-col items-center justify-center">
                <p className="text-[#00df9a] font-bold text-lg">GROWING WITH DATA ANALYTICS</p>
                <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-6">Grow with data</h1>
                <div className='flex'>
                <p className="md:text-4xl sm:text-3xl text-xl font-bold mx-4">Fast, flexible, financing for</p>
                <Typed className="md:text-4xl sm:text-3xl text-xl font-bold"
                strings={[" BTB"," BTC"," SASS"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop >
                </Typed>
                </div>
                <p className='pt-2 text-gray-500 md:text-2xl sm:text-2xl'>Monitor your data to increase revenue for <br/> BTB, BTC,and SASS platform</p>
                <button className='bg-[#00df9a] p-2 m-2 text-black text-bold rounded-[10px] hover:bg-gray-400'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero;