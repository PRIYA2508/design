export function Main(){
    const webinars = [
    { time: "11:30 AM", status: "Live", title: "UX Webinar", color: "red" },
    { time: "11:30 AM", status: "Upcoming", title: "My first Webinar", color: "blue" },
    { time: "11:30 AM", status: "Upcoming", title: "Important Webinar", color: "blue" },
    { time: "11:30 AM", status: "Upcoming", title: "Webinar 1", color: "blue" },
  ];
  const colorMap = {
    red: "bg-red-600",
    blue: "bg-blue-600",
  };
    return(
       
      <div className="w-[320px] bg-amber-50 p-5 rounded-lg m-3 ">
        <input type="text" placeholder="📅 Monday, 14 October 2024  ← → " className="w-full rounded-lg bg-amber-100 px-2 mb-2" />
      
      <div className="divide-y divide-gray-300">
       {webinars.map((webinar ,index)=>(
       <div className="flex items-start gap-20 ">
       <div className="w-20 px-2 py-1">
        {webinar.time}
        
        <h6 className="text-xs font-light">{webinar.time}</h6>
       </div>
       <div>
        <div>
          <span className="text-sm font-light">{webinar.status}</span>
          <span
                className={`ml-2 w-3 h-3 rounded-full inline-block ${colorMap[webinar.color]}`}
              ></span>
        </div>
        <div>
          <p>{webinar.title}</p>
        </div>
       </div>
       
       
       </div>
       ))}
       </div>
       </div> 
    )
}