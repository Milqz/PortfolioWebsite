import video from '../vids/AgeOfSnailsCompressed.mp4';

import thumbnalImage from "../img//AgeOfSnails/EnemyShowcase.png"
import EnemyDesign from "../img/AgeOfSnails/jumpscare.png"
import GUI from "../img/AgeOfSnails/GUI.png"
import Environment1 from "../img/AgeOfSnails/environment.png"
import Environment2 from "../img/AgeOfSnails/enviroment.png"
import Pumpkin from "../img/AgeOfSnails/pumpkin.png"
import Pumpkin2 from "../img/AgeOfSnails/pumpkin2.png"

export default function AgeOfSnailsPage() {
    return (
        <div className="sProjectContainer">
            <div>
                <h1>Age of Snails</h1>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>What is It</h2>
                    <p>Age of Snails is a horror twist on snail jousting set in a dark forest. Armed with a spear, you must collect 10 pumpkins while fending off aggressive snails that also have spears. Aim quickly to joust them away, or face defeat! The more pumpkins you gather, the more snails spawn, adding to the challenge. With jumpscares and a creepy atmosphere, this thrilling game was created in just 12.5 hours during a game jam!</p></div>
                <img src={thumbnalImage} alt="MiniMe"/>
            </div>
            <div>
                <h1>Video</h1>
            </div>
            <div className="sProjectVideoContainer">
                <video src={video} controls={true}/>
            </div>
            <div>
                <h1>I am proud of...</h1>
            </div>
            <div className="sProjectContentReverse">
                <img src={EnemyDesign} alt="MiniMe"/>
                <div>
                    <h2>Time Pressure</h2>
                    <p>Working on Age of Snails under a tight 12.5-hour deadline was a thrilling challenge. Our team communicated effectively, dividing tasks based on our strengths and holding quick check-ins to stay aligned. Despite the pressure, we collaborated well, brainstorming ideas and solving issues together. This teamwork made the process enjoyable and helped us create a cohesive game in a short time!</p>
                </div>
            </div>
            <div className="sProjectContent">
                <div>
                    <h2>Actual Tasks</h2>
                    <p>I focused on several key tasks, including player movement, sound design, and UI. I implemented smooth player controls to enhance the gameplay experience and added sound effects to elevate the horror atmosphere. Additionally, I worked on the user interface to keep players informed and engaged. I also set up the enemy spawning system, which added to the challenge and excitement of the game. It was rewarding to see how my contributions tied everything together in just 12.5 hours!</p>
                </div>
                <img src={GUI} alt="MiniMe"/>
            </div>
            <div className="sProjectContentReverse">
                <img src={Pumpkin2} alt="MiniMe"/>
                <div>
                    <h2>Project Leader</h2>
                    <p>In Age of Snails, I took on the role of the project glue, ensuring that all elements of the game worked together seamlessly. I coordinated the interactions between the map, enemies, and pumpkins, making sure they all functioned properly with the player. This role was crucial in creating a cohesive experience, allowing our team’s creative ideas to come together effectively during our limited time.</p>
                </div>
            </div>
            <div className="sProjectContentSummary">
                <div>
                    <p>My work experience on Age of Snails was fast-paced and rewarding. In just 12.5 hours during a game jam, we created a horror twist on snail jousting, earning 2nd place overall and 1st in our theme. I focused on player movement, sound design, and UI, which helped enhance my skills while emphasizing teamwork under pressure!</p>
                </div>
            </div>

            <div>
                <h1>Gallery</h1>
            </div>

            <div className="sProjectContent">
                <img src={Environment1} alt="MiniMe"/>
                <img src={Environment2} alt="MiniMe"/>
            </div>
            <div className="sProjectContent">
                <img src={Pumpkin} alt="MiniMe"/>
                <img src={Pumpkin2} alt="MiniMe"/>
            </div>
        </div>
    )
}