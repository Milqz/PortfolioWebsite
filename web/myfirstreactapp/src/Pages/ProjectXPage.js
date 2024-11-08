import video from '../vids/ProjectXCompressed.mp4';

import thumbnalImage from "../img/ProjectX/Enemy.png"
import EnemyDesign from "../img/ProjectX/ProjectX_Entity3.png"
import PlayerDesign from "../img/ProjectX/PlayerPic.png"
import ShowCase1 from "../img/ProjectX/ProjectX_Envouirment2.png"
import ShowCase2 from "../img/ProjectX/Environment4.png"
import ShowCase3 from "../img/ProjectX/ProjectX_Ingame.png"
import ShowCase4 from "../img/ProjectX/Level1.png"
import newImage from "../img/ProjectX/ProjectX_Envouirment3.png"

export default function ProjectXPage() {
    return (
        <div className="sProjectContainer">
            <div>
                <h1>Project X</h1>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>What is It</h2>
                    <p>Project X is a surreal adventure where you play as a scientist pulled into a strange dimension
                        after a particle accelerator accident. Trapped in a vast void of floating debris, you must leap
                        between rocks to reach a portal. It leads to an old, abandoned library haunted by a creature
                        that hunts you relentlessly. As you explore, you’ll need to stay alert, hide when needed, and
                        navigate the maze-like rooms to escape without being caught.</p>
                </div>
                <img src={thumbnalImage} alt="MiniMe"/>
            </div>
            <div>
                <h1>Video</h1>
            </div>
            <div className="sProjectVideoContainer">
                <video src={video} controls={true}></video>
            </div>
            <div>
                <h1>I am proud of...</h1>
            </div>
            <div className="sProjectContentReverse">
                <img src={EnemyDesign} alt="MiniMe"/>
                <div>
                    <h2>New Experience</h2>
                    <p>Working on Project X was a great experience for me, especially since it was my first 3D project.
                        I learned a lot about teamwork, and everything went really smoothly. We managed to pull it all
                        together in just four weeks, which felt pretty fast! It was exciting to see how we all
                        contributed our skills and ideas to create something awesome together.</p>
                </div>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>Player Movement</h2>
                    <p>In Project X, I focused on creating a smooth player movement system. I implemented wall jumps and
                        wall runs to enhance mobility, along with features like coyote time for jumping after leaving a
                        ledge, crouching, running, and jumping. I also fine-tuned the camera effects and slope movement
                        for a more dynamic gameplay experience. It was a fun challenge to make everything feel just
                        right!</p>
                </div>
                <img src={PlayerDesign} alt="MiniMe"/>
            </div>
            <div className="sProjectContentReverse">
                <img src={newImage} alt="MiniMe"/>
                <div>
                    <h2>Sound Design</h2>
                    <p>In Project X, I took on the sound design, gathering and implementing all the audio elements for the game. I created sound effects for player movement, the monster, jumpscares, and ambient sounds to enhance the atmosphere. This process taught me how crucial sound is for creating an immersive experience, and I loved adding that extra layer of depth to the game!</p>
                </div>
            </div>
            <div className="sProjectContentSummary">
                <div>
                    <p>Working on Project X was an incredible learning experience. I honed my skills in teamwork during my first 3D project, where I contributed to the player movement system and handled the sound design. Gathering and implementing sounds for movement, monster encounters, jumpscares, and ambient effects added another layer to our game. It was exciting to see how our collaboration led to impressive results in just four weeks!</p>
                </div>
            </div>

            <div>
                <h1>Gallery</h1>
            </div>

            <div className="sProjectContent">
                <img src={ShowCase1} alt="MiniMe"/>
                <img src={ShowCase2} alt="MiniMe"/>
            </div>
            <div className="sProjectContent">
                <img src={ShowCase3} alt="MiniMe"/>
                <img src={ShowCase4} alt="MiniMe"/>
            </div>
        </div>
    )
}