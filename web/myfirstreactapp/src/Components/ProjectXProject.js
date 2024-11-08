import ProjectXEntityAproching from "../img/ProjectX/Enemy.png";
export default function ProjectXProject(){
    return (
        <a href="/projects/ProjectX">
            <div className="projectTile">
                <div className="wrapper">
                    <div className="projectImg">
                        <img src={ProjectXEntityAproching} alt="projectImage"/>
                        <div className="content">
                            <h1>Project X</h1>
                            <p>A fast-paced horror game</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}