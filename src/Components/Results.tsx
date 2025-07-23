import { useSelector } from "react-redux"
import type { rootType } from "../Redux/store"
import { useEffect, useState } from "react"
import { check } from "../utils/features"


const Results = () => {
  const [data,setData]=useState<number>(0)
const {words,results}=useSelector((state:rootType)=>state.roots)



useEffect(()=>{
 const  mathch:number= check(results,words.map((i)=>i.meaning))
 setData(mathch)


},[])

  return (
    <div className="mains">
      {
        results.map((i,id)=>{
        return(
          <div key={id} className="words">
          <div className="correct">  <p>{id+1}:{ words[id]?.meaning}:{"answer"}</p></div>
          <div className="result"><p>{i}</p></div>
            
          </div>
        )

        })
      }
      {
        data ? <div className="data">{data} mathch</div>:""
      }
    </div>
  )
}

export default Results