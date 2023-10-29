export const Analytics = ()=>{
    return(
        <div className="w-full bg-white py-16 px-4 flex flex-col justify-center">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-100 h-100" src="https://img.freepik.com/free-vector/video-conference-remote-working-flat-illustration-screen-laptop-with-group-colleagues-people-conn_88138-548.jpg?w=1060&t=st=1698574214~exp=1698574814~hmac=cc68195d03897614f060dbc3fac030f4c5926e308ccb8af8db313246e596e255" alt="laptop"/>
                <div className="flex flex-col justify-center">
                    <p className="text-bold pt-2 text-[#00d9fa] text-xl">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="text-bold text-xl pt-2">Manage Data Analytics Centrally</h1>
                    <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u
                    t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit
                    ation ullamco laboris nisi ut aliquip ex ea commo</p>
                    <button className="bg-black w-[200px] h-10 text-[#00df9a] text-bold p-2 mt-2 rounded-lg hover:bg-[#00df9a] hover:text-black">Get Started</button>
                </div>
            </div>
        </div>
    )
}