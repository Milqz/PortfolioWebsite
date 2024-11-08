import thumbnailPic from "../img/DriveOrDie/Car.png";

export default function DriveOrDieProject(){
    return (
        <a href="/projects/DriveOrDie">
            <div className="projectTile">
                <div className="wrapper">
                    <div className="projectImg">
                        <img src={thumbnailPic} alt="projectImage"/>
                        <div className="content">
                            <h1>Drive Or Die</h1>
                            <p>A zombie racing game</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}