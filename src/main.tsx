import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";


const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(229, 70, 70)",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>

      <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
