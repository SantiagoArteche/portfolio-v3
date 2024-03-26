import { ChatBotContextProvider } from "./Context/ChatBotContext";
import { DarkModeContextProvider } from "./Context/DarkModeContext";
import { LanguageContextProvider } from "./Context/LanguageContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Grid } from "./components/grid/Grid";
import { ProjectsPage } from "./components/projectsPage/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <ChatBotContextProvider>
        <DarkModeContextProvider>
          <LanguageContextProvider>
            <Routes>
              <Route path="/" element={<Grid />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </LanguageContextProvider>
        </DarkModeContextProvider>
      </ChatBotContextProvider>
    </BrowserRouter>
  );
}

export default App;
