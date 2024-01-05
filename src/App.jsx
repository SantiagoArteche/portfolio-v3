import "./App.css";

import { Grid } from "./components/grid/Grid";
import { ChatBotContextProvider } from "./Context/ChatBotContext";
import { DarkModeContextProvider } from "./Context/DarkModeContext";
import { LanguageContextProvider } from "./Context/LanguageContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ChatBotContextProvider>
        <DarkModeContextProvider>
          <LanguageContextProvider>
            <Routes>
              <Route path="/" element={<Grid />} />
            </Routes>
          </LanguageContextProvider>
        </DarkModeContextProvider>
      </ChatBotContextProvider>
    </BrowserRouter>
  );
}

export default App;
