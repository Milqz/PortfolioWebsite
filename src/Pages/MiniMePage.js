import video from '../vids/MiniMeCompressed.mp4';

import enemyDesign from "../img/MiniMe/EnemyDesign.png"
import enemyDesign2 from "../img/MiniMe//EnemyDesign2.png"
import enemyDesign3 from "../img/MiniMe//EnemyDesign3.png"
import bulletDesign from "../img/MiniMe/BossDesign.png"
import mapDesign from "../img/MiniMe/MapDesign.png"
import scoreDesign from "../img/MiniMe/ScoreDesign.png"
import PlayerDesign from "../img/MiniMe/player.png"
import bullet from "../img/MiniMe/bullets.png"

export default function MiniMePage() {
    return (
        <div className="sProjectContainer">
            <div>
                <h1>Mini Me</h1>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>What is It</h2>
                    <p>Mini Me is a fun, action-packed 2D bullet-hell dungeon crawler where you play as a quick little purple ghost with some cool blue fire powers. You’ll zip through tricky dungeons, dodging enemy bullets while hunting for keys to unlock new areas. Clear each room as fast as you can to score big and take on some wild multi-phase boss fights. With its retro pixel art and fast gameplay, it’s a blast for anyone who loves a good challenge!</p>
                </div>
                <img src={enemyDesign} alt="MiniMe"/>
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
                <img src={bulletDesign} alt="MiniMe"/>
                <div>
                    <h2>Bullet script</h2>
                    <p>
                        I made a cool script that simplifies bullet spawning! You just drop in a bullet prefab and set variables like angle, speed, size, and damage. If you want the bullet to aim at the player, it shoots straight at them, but if not, it shoots straight up. I also added a spawn delay to create a wave effect, so when you fire bullets at different times, it feels like multiple bullets are coming out at once. It really adds some nice dynamics to the gameplay!</p>
                </div>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>New Skills</h2>
                    <p>
                        I learned to use Unity's new input system, which made player controls much smoother and more responsive. I also explored 2D lights for cool effects and depth, and got into the tilemap system with tile rules to streamline level design. It's really boosted both my creativity and efficiency!</p>
                </div>
                <img src={mapDesign} alt="MiniMe"/>
            </div>
            <div className="sProjectContentReverse">
                <img src={scoreDesign} alt="MiniMe"/>
                <div>
                    <h2>Score system</h2>
                    <p>I implemented a score system with high scores based on enemy kills, doors opened, keys collected, and whether you defeat the boss. The faster you do it all, the higher your score! This adds a fun speedrun dynamic to the game, encouraging players to beat their best times while maximizing their points.</p>
                </div>
            </div>
            <div className="sProjectContentSummary">
                <div>
                    <p>Working on Mini Me has been an incredible experience! I gained hands-on skills in Unity, mastering 2D lighting, the new input system, and tilemap design. I’m proud of creating a flexible bullet spawning system and a dynamic score system that adds a speedrun element to the game. This project sharpened both my technical abilities and my creativity, making it a truly rewarding journey in game development!</p>
                </div>
            </div>

            <div>
                <h1>Gallery</h1>
            </div>

            <div className="sProjectContent">
                <img src={PlayerDesign} alt="MiniMe"/>
                <img src={bullet} alt="MiniMe"/>
            </div>
            <div className="sProjectContent">
                <img src={enemyDesign2} alt="MiniMe"/>
                <img src={enemyDesign3} alt="MiniMe"/>
            </div>
        </div>
    )
}