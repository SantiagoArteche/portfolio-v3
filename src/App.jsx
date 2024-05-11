import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Grid } from "./components/grid/Grid";
import { ProjectsPage } from "./components/projectsPage/ProjectsPage";
import { GeneralProvider } from "./Context/GeneralProvider";
function App() {
  return (
    <BrowserRouter>
      <GeneralProvider>
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </GeneralProvider>
    </BrowserRouter>
  );
}

export default App;
