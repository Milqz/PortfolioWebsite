import MiniMeProject from '../Components/MiniMeProject';
import WorldEvolutionProject from '../Components/WorldEvolutionProject';
import ProjectXProject from '../Components/ProjectXProject';
import DungeonCrawlerProject from '../Components/DungeonCrawlerProject';
import AgeOfSnailsProject from '../Components/AgeOfSnailsProject';
import DriveOrDieProject from '../Components/DriveOrDieProject'
export default function Projects(){
    return (
        <div>
            <div>
                <h1 id='projectsTitle'>Projects</h1>
            </div>

            <div className="projectsContainer">
                <div id="projectsLeft">
                    <ul className="projects">
                        <li className="project">
                            <WorldEvolutionProject/>
                        </li>
                        <li className="project">
                            <DungeonCrawlerProject/>
                        </li>
                        <li className="project">
                            <AgeOfSnailsProject/>
                        </li>
                    </ul>
                </div>
                <div id="projectsRight">
                    <ul className="projects">
                        <li className="project">
                            <MiniMeProject/>
                        </li>
                        <li className="project">
                            <ProjectXProject/>
                        </li>
                        <li className="project">
                            <DriveOrDieProject/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}