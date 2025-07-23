import { Button, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useEffect,  useState } from "react";
import { ArrowBack, VolumeUp } from "@mui/icons-material";

import { useNavigate, useSearchParams } from "react-router";
import { translate } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import { getFail, getSucess, getwordRequest } from "../Redux/sclics";
import type { Appdispatch, rootType } from "../Redux/store";
import Loader from "./Loader";

const Learing = () => {
  const [count, setCount] = useState<number>(0);

  const params = useSearchParams()[0].get("language") as Lange;
  const navigator = useNavigate();
  const dispatch = useDispatch<Appdispatch>();
 
  const { loading, words } = useSelector((state: rootType) => state.roots);

  const nextHandeler = (): void => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getwordRequest());
    translate(params)
      .then((arr) => {
      
        dispatch(getSucess(arr));
      })
      .catch((err) => {
        dispatch(getFail(err));
      });
  }, []);
  if (loading) return <Loader />;
  return (
    <Container
      maxWidth={"sm"}
      sx={{
        padding: "1rem",
      }}
    >
      <Button
        onClick={
          count === 0
            ? () => navigator("/")
            : () => setCount((prev) => prev - 1)
        }
      >
        <ArrowBack />
      </Button>
      <Typography m={"2rem 0"}>learning made Easy</Typography>
      <Stack direction={"row"} spacing={"1rem"}>
        <Typography variant={"h4"}>
          {count + 1} - {words[count]?.word}
        </Typography>
        <Typography color={"blue"} variant="h4">
          :{words[count]?.meaning}
        </Typography>
        <Button
          sx={{
            borderRadius: "50%",
          }}
         
        >
          <VolumeUp />
        </Button>
      </Stack>
      <Button
        fullWidth
        sx={{
          margin: "3rem 0",
        }}
        variant="contained"
        onClick={
          count === words.length - 1 ? () => navigator("/quiz") : nextHandeler
        }
      >
        {count === words.length - 1 ? "Text" : "next"}
      </Button>
    </Container>
  );
};

export default Learing;
