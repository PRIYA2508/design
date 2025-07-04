export function Main(){
    const webinars = [
    { time: "11:30 AM", status: "Live", title: "UX Webinar", color: "red" },
    { time: "11:30 AM", status: "Upcoming", title: "My first Webinar", color: "blue" },
    { time: "11:30 AM", status: "Upcoming", title: "Important Webinar", color: "blue" },
    { time: "11:30 AM", status: "Upcoming", title: "Webinar 1", color: "blue" },
  ];
    return(
       
      <div className="w-[320px] bg-amber-700 p-5 rounded-lg m-3">
        <input type="text" placeholder="📅 Monday, 14 October 2024  ← → " className="w-full rounded-lg bg-amber-100 px-2 mb-2" />
       {/* <div className="w-20 bg-amber-200 rounded-lg"> */}
        11:30AM
        <h6 className="text-xs font-light">11:30AM</h6>
      

       </div> 
    )
}