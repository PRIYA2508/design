export function Main(){
    const webinars = [
    { time: "11:30 AM", status: "Live", title: "UX Webinar", color: "red" },
    { time: "11:30 AM", status: "Upcoming", title: "My first Webinar", color: "blue" },
    { time: "11:30 AM", status: "Upcoming", title: "Important Webinar", color: "blue" },
    { time: "11:30 AM", status: "Upcoming", title: "Webinar 1", color: "blue" },
  ];
    return(
       <div className="bg-white rounded-xl shadow-md w-[400px] p-4 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span>📅</span>
          <h2 className="text-sm font-semibold">Monday, 14 October 2024</h2>
        </div>
        <div className="text-xl space-x-2">
          <button>←</button>
          <button>→</button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {webinars.map((item, idx) => (
          <div key={idx} className="border-b pb-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>{item.time}</span>
              <span className="flex items-center gap-1">
                {item.status}
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    item.color === "red" ? "bg-red-500" : "bg-blue-500"
                  }`}
                ></span>
              </span>
            </div>
            <div className="text-sm font-medium">{item.title}</div>
          </div>
        ))}
      </div>
    </div> 
    )
}