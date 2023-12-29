import "./App.css";

import { Grid } from "./components/grid/Grid";
import { DarkModeContextProvider } from "./Context/DarkModeContext";
import { LanguageContextProvider } from "./Context/LanguageContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DarkModeContextProvider>
        <LanguageContextProvider>
          <Routes>
            <Route path="/" element={<Grid />} />
          </Routes>
        </LanguageContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  );
}

export default App;
