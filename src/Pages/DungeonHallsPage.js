import video from '../vids/DungeonsHallCompressed.mp4';

import thumbnalImage from "../img/DungeonHalls/thumbnail.png"
import environment from "../img/DungeonHalls/Environment.png";
import environment2 from "../img/DungeonHalls/Environmen2.png";
import puzzle from "../img/DungeonHalls/Puzzle.png";
import puzzleEnding from "../img/DungeonHalls/PuzzleEnding.png";
import thumbnail2 from "../img/DungeonHalls/thumbnail2.png"
import enemies from "../img/DungeonHalls/enemies.png"
import UI from "../img/DungeonHalls/UI.png"

export default function DungeonHallsPage() {
    return (
        <div className="sProjectContainer">
            <div>
                <h1>Dungeon Halls</h1>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>What is It</h2>
                    <p>Dungeon Halls is an undead dungeon crawler where you battle skeletons using spells like sword summoning and icy projectiles. Find three hidden runes to unlock the final room, complete parkour challenges over lava, and match the runes to win the crown. Can you outsmart the skeletons and escape?</p>
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
                <img src={enemies} alt="MiniMe"/>
                <div>
                    <h2>Enemy Development</h2>
                    <p>In Dungeon Halls, I focused on creating the enemies for my second 3D project. I designed their attack and shooting animations, making sure they felt dynamic and engaging during battles. Additionally, I implemented a spawning system to bring the skeletons into the dungeon, enhancing the gameplay experience. It was exciting to see my work come to life and challenge players as they navigated the castle!</p>
                </div>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>Sound Design</h2>
                    <p>In Dungeon Halls, I took charge of the sound design once again. I created and implemented various sound effects for the enemies, spellcasting, and the environment to enhance the immersive experience. From the clashing of weapons to the eerie ambiance of the dungeon, I aimed to make every moment feel alive and engaging for players.</p>
                </div>
                <img src={thumbnail2} alt="MiniMe"/>
            </div>
            <div className="sProjectContentReverse">
                <img src={UI} alt="MiniMe"/>
                <div>
                    <h2>UI Design</h2>
                    <p>In Dungeon Halls, I designed the user interface, including the main menu, game over screen, and health bar. My aim was to create a clear and engaging layout that kept players informed without distracting from the gameplay. The UI enhances the overall experience, allowing players to focus on their adventure in the dungeon while easily tracking their progress and health.</p>
                </div>
            </div>
            <div className="sProjectContentSummary">
                <div>
                    <p>Working on Dungeon Halls was a lot of fun! I learned a great deal about NavMesh systems while developing the enemy AI, which really enhanced the gameplay. It was exciting to see how everything came together, and I enjoyed the challenge of creating a more dynamic 3D environment. This project helped me grow my skills and deepen my understanding of game development!</p>
                </div>
            </div>

            <div>
                <h1>Gallery</h1>
            </div>

            <div className="sProjectContent">
                <img src={environment} alt="MiniMe"/>
                <img src={environment2} alt="MiniMe"/>
            </div>
            <div className="sProjectContent">
                <img src={puzzle} alt="MiniMe"/>
                <img src={puzzleEnding} alt="MiniMe"/>
            </div>
        </div>
    )
}