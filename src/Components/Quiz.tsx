
import { Radio,Button, Container, FormControl, FormControlLabel, FormLabel, RadioGroup, Typography } from "@mui/material"
import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import type { rootType } from "../Redux/store";
import { getResult } from "../Redux/sclics";
import { useNavigate } from "react-router";

const Quiz = () => {
     const [count, setCount] = useState<number>(0);
    
  const [ans, setAns] = useState<string>("");
  const [result,setResult]= useState<string[]>([])
  const {words} =useSelector((state:rootType)=>state.roots)
  const dispatch = useDispatch()
  const naviagate= useNavigate()
  const handelForm =()=>{

    
    setResult((prev)=>[...prev,ans])
    setCount((prev)=>prev+1)
    setAns("")
    
  }
  useEffect(()=>{
    if(count+1>words.length){
      naviagate("/result")
      dispatch(getResult(result))
    }
  },[result])
  
  
 
  return (
    

    <Container maxWidth={"sm"} sx={{
        padding:"1rem"
    }}>
        <Typography m={"2rem 0" }>
            Quiz
        </Typography>
        <Typography>
{count+1} :{words[count]?.word}
        </Typography>
        <FormControl>
            <FormLabel  sx={{
            mt: "2rem",
            mb: "1rem",
          }}>meaning


            </FormLabel>
            <RadioGroup value={ans} onChange={(e)=>setAns(e.target.value)}>
             {
              words[count]?.options.map((i,id)=>   <FormControlLabel  value={i} key={id} control={<Radio/>} label={i}/>)
             }
            </RadioGroup>
        </FormControl>
        <Button
        sx={{
          margin: "3rem 0",
        }}
        variant="contained"
        fullWidth
        onClick={handelForm}
        disabled={ans === ""}
      >
        {count === 7? "Submit" : "Next"}
      </Button>
    </Container>
    
  )
}

export default Quiz