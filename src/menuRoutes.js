import { Grid } from "./components/grid/Grid";
import { ProjectsPage } from "./components/projectsPage/ProjectsPage";

export const routes = [
  {
    id: "home",
    Element: Grid,
    path: "/",
  },
  { id: "projects", Element: ProjectsPage, path: "/projects" },
];
