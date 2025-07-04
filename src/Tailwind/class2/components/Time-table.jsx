import schedule from "../../../assets/schedule.png"
import video from "../../../assets/video.png"
import calendar from "../../../assets/calendar.png"
export function Timetable(){
    return(
        
        <div className="bg-amber-50 rounded-lg p-4 grid grid-cols-2 w-fit gap-4 place-items-center m-10 ">
          
          <img src={video} className="w-8 h-8  border rounded-md bg-blue-400"/>
          <img src={calendar} className="w-8 h-8 border rounded-md bg-blue-400"/>
          <img src={schedule} className="w-8 border rounded-md bg-blue-400"/>
        </div>
        
    )
}
