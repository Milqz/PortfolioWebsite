import thumbnalImage from "../img/WorldEvo/MainThumbnail.png"
import tasks from "../img/WorldEvo/Tasks.png"
import lab from "../img/WorldEvo/Lab.png"
import mission from "../img/WorldEvo/Missions.png"
import satellite from "../img/WorldEvo/Satellite.png"
import satelliteConstruction from "../img/WorldEvo/SaetlliteConst.png"
import mainScreen from "../img/WorldEvo/mainscreen.png"

export default function WorldEvolutionPage() {
    return (
        <div className="sProjectContainer">
            <div>
                <h1>World Evolution</h1>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>What is It</h2>
                    <p>World Evolution is an idle clicker game where you guide Earth from a lava-filled beginning to a vibrant world of life. Upgrade your satellite for passive income, unlock creatures for bonuses, and complete quests to speed up evolution. Click your way from the dawn of life to the age of dinosaurs and beyond!</p>
                </div>
                <img src={thumbnalImage} alt="MiniMe"/>
            </div>
            <div>
                <h1>I am proud of...</h1>
            </div>
            <div className="sProjectContentReverse">
                <img src={mainScreen} alt="MiniMe"/>
                <div>
                    <h2>From Scratch</h2>
                    <p>Creating World Evolution was my first big project, and it became my playground for learning to code from the ground up. I built everything from scratch, learning a ton along the way. Every few months, I’d look back at my early work and think, “This could be way better!”—which led to a lot of redesigns and improvements over 1.5 years. It’s been a journey of constant learning, where each step taught me something new about coding and game development.</p>
                    </div>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>Missions</h2>
                    <p>
                        I designed an adaptable mission system that makes creating new missions easy and flexible. Each mission has three tasks to level up, and once all reach level 10, the mission is complete, unlocking the next stage of World Evolution. Using indexed arrays, I can set up and customize missions quickly for each phase. This system has been a game-changer, letting me add and adjust missions effortlessly as the game grows.
                    </p>
                </div>
                <img src={mission} alt="MiniMe"/>
            </div>
            <div className="sProjectContentReverse">
                <img src={satelliteConstruction} alt="MiniMe"/>
                <div>
                    <h2>Determination</h2>
                    <p>Working on World Evolution for 1.5 years has been a true test of my determination. Despite the challenges and constant learning curves, I stayed committed to bringing this project to life. Each setback only motivated me to improve, and sticking with it taught me the value of persistence and patience in game development.</p>
                     </div>
            </div>
            <div className="sProjectContentSummary">
                <div>
                   <p>
                       Over the past 1.5 years, I’ve gained hands-on experience in game development by building World Evolution from scratch. This project has taught me coding fundamentals, the importance of persistence, and how to design flexible systems all while evolving my skills and creativity.
                   </p>
                </div>
            </div>

            <div>
                <h1>Gallery</h1>
            </div>

            <div className="sProjectContent">
                <img src={tasks} alt="MiniMe"/>
                <img src={mission} alt="MiniMe"/>
            </div>
            <div className="sProjectContent">
                <img src={lab} alt="MiniMe"/>
                <img src={satellite} alt="MiniMe"/>
            </div>
        </div>
    )
}