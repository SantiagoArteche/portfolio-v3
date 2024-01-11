import "./App.css";
import { ChatBotContextProvider } from "./Context/ChatBotContext";
import { DarkModeContextProvider } from "./Context/DarkModeContext";
import { LanguageContextProvider } from "./Context/LanguageContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { routes } from "./menuRoutes";

function App() {
  return (
    <BrowserRouter>
      <ChatBotContextProvider>
        <DarkModeContextProvider>
          <LanguageContextProvider>
            <Routes>
              {routes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Routes>
          </LanguageContextProvider>
        </DarkModeContextProvider>
      </ChatBotContextProvider>
    </BrowserRouter>
  );
}

export default App;
