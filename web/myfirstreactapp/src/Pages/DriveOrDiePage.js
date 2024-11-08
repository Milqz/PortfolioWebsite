import thumbnalImage from "../img/DriveOrDie/Car.png"
import car2 from "../img/DriveOrDie/car2.png"
import ingame1 from "../img/DriveOrDie/Ingame.png"
import ingame2 from "../img/DriveOrDie/Ingame2.png"
import ingame3 from "../img/DriveOrDie/Ingame3.png"
import blood from "../img/DriveOrDie/Blood.png"
import desert from "../img/DriveOrDie/Desert.png"
import plains from "../img/DriveOrDie/Plains.png"
import refuel from "../img/DriveOrDie/Refuel.png"
import start from "../img/DriveOrDie/start.png"

export default function DriveOrDiePage() {
    return (
        <div className="sProjectContainer">
            <div>
                <h1>Drive Or Die</h1>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>What is It</h2>
                    <p>Drive or Die challenges you to navigate a car with limited fuel while evading increasingly large zombies. Reach fuel stations to refuel and run over zombies to progress further. In the main menu, you can mod your car with upgrades like turrets, bumpers, and chainsaws, using coins collected based on your distance traveled. How far can you go before they catch you?</p>
                </div>
                <img src={thumbnalImage} alt="MiniMe"/>
            </div>
            <div>
                <h1>I am proud of...</h1>
            </div>
            <div className="sProjectContentReverse">
                <img src={blood} alt="MiniMe"/>
                <div>
                    <h2>VFX</h2>
                    <p>
                        In Drive or Die, I learned to create visual effects (VFX) using Unity's particle system. This project allowed me to enhance the game’s visuals with dynamic effects, like explosions and debris when running over zombies. It was a rewarding experience that deepened my understanding of VFX in game development!</p>
                </div>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>Animations</h2>
                    <p>
                        In Drive or Die, I also learned to create dynamic animations, particularly for the refueling process. When the car collides with a fuel station, an engaging animation plays along with a cool visual effect. I’m proud of how this addition enhances the gameplay experience, making refueling feel exciting and rewarding for players!</p>
                </div>
                <img src={refuel} alt="MiniMe"/>
            </div>
            <div className="sProjectContentReverse">
                <img src={start} alt="MiniMe"/>
                <div>
                    <h2>Zombies</h2>
                    <p>In Drive or Die, I designed the zombies with cute, cartoonish animations. I focused on tiny movements that add personality, making the zombies both playful and engaging. These animations help bring the characters to life and enhance the fun of the game!</p>
                </div>
            </div>
            <div className="sProjectContentSummary">
                <div>
                    <p>Working on Drive or Die has been an exciting journey so far. I’m enjoying the challenge of creating engaging gameplay while learning new skills, especially in VFX and animation. Collaborating with my team has been rewarding, and I appreciate the creative process as we bring our ideas to life. I look forward to continuing to enhance the game and seeing how it evolves!</p>
                </div>
            </div>

            <div>
                <h1>Gallery</h1>
            </div>

            <div className="sProjectContent">
                <img src={ingame1} alt="MiniMe"/>
                <img src={ingame2} alt="MiniMe"/>
            </div>
            <div className="sProjectContent">
                <img src={ingame3} alt="MiniMe"/>
                <img src={car2} alt="MiniMe"/>
            </div>
            <div className="sProjectContent">
                <img src={desert} alt="MiniMe"/>
                <img src={plains} alt="MiniMe"/>
            </div>
        </div>
    )
}