import { useState } from "react";

export function Sidebar(){
    
    return(
        <div className="flex h-screen">
           <div className="transition-all duration-75 ease-in-out delay-75 bg-pink-400 sm:w-54 w-13  md:hover:bg-amber-400">
            Sidebar
           </div>
           <div className="bg-blue-400 w-screen">
            Content 
           </div>
        </div>
    )
}