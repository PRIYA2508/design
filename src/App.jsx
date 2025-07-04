import { useState } from 'react'
import './App.css'
import {GetInitialData} from "./Tailwind/class1/class-1"
import { Webinarpage } from './Tailwind/class1/webinar'
import { Timetable } from './Tailwind/class2/components/Time-table'
import { Intro } from './Tailwind/class2/components/Into'


function App() {
  return (
    <>
      <div>
      <Timetable/>
      </div>
      
    </>
  )
}

export default App
