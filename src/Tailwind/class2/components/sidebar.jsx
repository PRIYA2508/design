import { useState } from "react";

export function Sidebar(){
    
    return(
        <div className="flex h-screen">
           <div className="sm:transition-transform hidden sm:block bg-pink-400 w-54">
            Sidebar
           </div>
           <div className="bg-blue-400 w-screen">
            Content 
           </div>
        </div>
    )
}