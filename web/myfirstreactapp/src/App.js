import './App.css'
import Navbar from './Components/Navbar.js'
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Projects from './Pages/Projects.js'
import MiniMePage from "./Pages/MiniMePage";
import ProjectXPage from "./Pages/ProjectXPage";
import WorldEvolutionPage from "./Pages/WorldEvolutionPage";
import DungeonHallsPage from "./Pages/DungeonHallsPage";
import DriveOrDiePage from "./Pages/DriveOrDiePage"
import AgeOfSnailsPage from "./Pages/AgeOfSnailsPage";
import Skills from './Pages/Skills';

function App() {
  let component
  switch (window.location.pathname) {
    case '/about':
      component = <About />
      break;
    case '/contact':
      component = <Contact />
      break;
    case '/skills':
      component = <Skills />
      break;
    case '/projects':
      component = <Projects />
      break;
    case '/projects/MiniMe':
      component = <MiniMePage />
      break;
    case '/projects/ProjectX':
      component = <ProjectXPage />
      break;
    case '/projects/WorldEvolution':
      component = <WorldEvolutionPage />
      break;
    case '/projects/DungeonHalls':
      component = <DungeonHallsPage />
      break;
    case '/projects/AgeOfSnails':
      component = <AgeOfSnailsPage />
      break;
    case '/projects/DriveOrDie':
      component = <DriveOrDiePage />
      break;
    default:
      component = <Home />
      break;
  }
  return (
      <>
        <Navbar />
        <div className="container">
            {component}
        </div>
      </>
  )
}

export default App;
