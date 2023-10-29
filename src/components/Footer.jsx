import Typed from 'react-typed';

export const Footer = ()=>{
    return(
        <div className="bg-black h-[50%] text-white py-20 px-5 text-center">
            <div className="max-w-[1240px] mx-auto">
                <h1>Developed By</h1>
                <h1 className="text-3xl">NAGAPAVAN A</h1>

                <Typed className='text-white'
                strings={[
                    'An Aspiring Full Stack Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
                <p className='text-gray-400'>Demo Webiste</p>
            </div>
        </div>
    )
}