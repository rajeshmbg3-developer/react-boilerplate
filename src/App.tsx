import AppRoutes from "src/routes/Routes";
import "./App.scss";
import { ThemeProvider } from "@emotion/react";
import theme from "src/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes></AppRoutes>
    </ThemeProvider>
  );
};

export default App;
