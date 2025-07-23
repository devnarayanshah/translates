import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router"


const language =[
  {

    name:"japanese",
    code:"ja"
  },
  {
    name:"hindi",
    code:"hi"
  },
  {
    name:"spanish",
    code:"es"
  },{
    name:"Franch",
    code:"fr",
  }

]
const Home = () => {
  const navigate = useNavigate()
  const languageSelectHandeler=(language:string):void=>{
    navigate(`/learn?language=${language}`)
  }


  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" p={"2rem" } textAlign={"center"}>
        welcome,Begin your jouney of lerning.
      </Typography>
      <Stack direction={"row"} spacing={"2rem"} p={"2rem"} alignContent={"center"} alignItems={"center"}>
  
        {
          language.map((i)=>(
           <Button onClick={()=>languageSelectHandeler(i.code)} key={i.code} variant="contained">{i.name}</Button>
          ))
        }
      </Stack>
      <Typography textAlign={"center"}>choose one language form above</Typography>
    </Container>
  )
}

export default Home