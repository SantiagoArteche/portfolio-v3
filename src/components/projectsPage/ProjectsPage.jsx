import { useContext, useState } from "react";
import { DarkModeContext, LanguageContext } from "../../Context";
import { ProjectsPagePresentational } from "./ProjectsPagePresentational";

export const ProjectsPage = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  document.title =
    language === "ES" ? "Portafolio - Proyectos" : "Portfolio - Projects";

  const [
    { calendar, journal, asoc, gif, heroes, am, ober, eJs },
    setContentView,
  ] = useState({
    calendar: "none",
    journal: "none",
    asoc: "none",
    gif: "none",
    heroes: "none",
    am: "none",
    ober: "none",
    eJs: "none",
  });

  const handleContentView = (project) => {
    setContentView(project);
  };

  return (
    <ProjectsPagePresentational
      darkMode={darkMode}
      language={language}
      calendar={calendar}
      journal={journal}
      asoc={asoc}
      gif={gif}
      heroes={heroes}
      am={am}
      ober={ober}
      eJs={eJs}
      setContentView={setContentView}
      handleContentView={handleContentView}
    />
  );
};
