import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  color: "white",
  margin: "0.5rem",
  textDecoration: "nonde",
};

const Hearder = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" mr={"auto"} textTransform={"uppercase"}>
            learndo.
          </Typography>
          <Link to="/" style={styles}> Home</Link>
          <Link to={"/login"} style={styles}>
            login
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Hearder;
