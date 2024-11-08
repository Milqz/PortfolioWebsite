import WorldEvolutionMainScreen from "../img//WorldEvo/MainThumbnail.png";
import MiniMePictureBoss from "../img/MiniMe/MiniMe_Bossshowcase.png";

export default function WorldEvolutionProject(){
    return (
        <a href="/projects/WorldEvolution">
            <div className="projectTile">
                <div className="wrapper">
                    <div className="projectImg">
                        <img src={WorldEvolutionMainScreen} alt="projectImage"/>
                        <div className="content">
                            <h1>World Evo</h1>
                            <p>An idle clicker game</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}