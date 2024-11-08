import thumbnailPic from "../img/AgeOfSnails/EnemyShowcase.png";

export default function AgeOfSnailsProject(){
    return (
        <a href="/projects/AgeOfSnails">
            <div className="projectTile">
                <div className="wrapper">
                    <div className="projectImg">
                        <img src={thumbnailPic} alt="projectImage"/>
                        <div className="content">
                            <h1>Age Of Snails</h1>
                            <p>A casual horror game</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}