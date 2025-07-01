export function Webinarpage(){
    return(
        <div className="bg-blue-600 flex flex-col justify-start h-screen ">
            <div className="p-15">
            <h2 className="text-center mb-20 font-bold text-teal-500">Webinar.gg</h2>
            <h2 className="text-center text-white font-bold mb-10"> Verify Your Age</h2>
            </div>
            <div className="flex flex-col items-center">
                <input type="text" placeholder="Enter Your Birth-Year" className="px-4 py-2 rounded-xl text-black ronded bg-blue-300 mb-10 w-70"/>
                <button className="bg-gray-300 text-blue-600 font-semibold px-6 py-2 rounded-xl hover:bg-gray-100 transition w-70">Continue</button>
            </div>
         
        </div>
    )
}