import me from "../../../assets/me.jpeg"
export function Intro(){
    return (
    <div className="bg-amber-50 max-w-fit flex flex-col rounded-xl items-center p-4 m-10">
      <img src={me} className="w-20 h-22 rounded-xl " alt="Priya" />
      <h2 className="font-bold">Priya Sharma</h2>
      <p>priya345@gmail.com</p>
      <p>988885678</p>
      <p>Delhi,India</p>
      
    </div>
  )
}