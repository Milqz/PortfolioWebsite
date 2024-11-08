import MiniMePictureBoss from "../img/MiniMe/EnemyDesign.png";

export default function MiniMeProject(){
    return (
        <a href="/projects/MiniMe">
            <div class="wrapper">
                <div className="projectImg">
                    <img src={MiniMePictureBoss} alt="projectImage"/>
                    <div className="content">
                        <h1>Mini Me</h1>
                        <p>A topdown bullet hell game</p>
                    </div>
                </div>
            </div>
        </a>
    )
}