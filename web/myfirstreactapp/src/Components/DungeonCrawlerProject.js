import DungeonHallsObjective from "../img/DungeonHalls/thumbnail.png";

export default function DungeonCrawlerProject(){
    return (
        <a href="/projects/DungeonHalls">
            <div className="projectTile">
                <div className="wrapper">
                    <div className="projectImg">
                        <img src={DungeonHallsObjective} alt="projectImage"/>
                        <div className="content">
                            <h1>Dungeon Halls</h1>
                            <p>An undead dungeon crawler game</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}