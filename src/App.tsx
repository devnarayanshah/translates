import { BrowserRouter, Route, Routes } from "react-router"

import { lazy, Suspense } from "react"
import Loader from "./Components/Loader"
import Hearder from "./Components/Hearder"
import './App.css'


const  Home =lazy(()=> import ("./Components/Home"))
const Learning = lazy(()=> import ("./Components/Learing"))
const Login =lazy(()=> import ('./Components/Login'))
const Quiz =lazy(()=> import("./Components/Quiz"))
const Results =lazy(()=> import ('./Components/Results'))
const App = () => {
 


  return (




    <div>
      
      <BrowserRouter>
<Hearder/>
      <Suspense fallback={<Loader/>}>
        <Routes>
       <Route path="/" element={<Home/>}/>
       
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Results/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/learn" element={<Learning/>}/>
 </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App