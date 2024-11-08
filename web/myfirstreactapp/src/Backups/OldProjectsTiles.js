import WorldEvolutionMainScreen from "../img/WorldEvo/WorldEvo_MainScreen.png";
import WorldEvolutionDialog from "../img/WorldEvo/WorldEvo_Dialog.png";
import WorldEvolutionTasks from "../img/WorldEvo/WorldEvo_Tasks.png";
import WorldEvolutionLab from "../img/WorldEvo/WorldEvo_Lab.png";
import WorldEvolutionSatellite from "../img/WorldEvo//WorldEvo_Satellite.png";

import UnityIcon from "../img/Icons/unityIcon.png"
import CSharpIcon from "../img/Icons/csharpIcon.png"
import React from "react";

function OldWorldEvolutionProject(){
    return (
        <div className="projectTile">
            <div className="projectUpperpart">
                <h1>World Evolution</h1>
                <p>2022 - NOW</p>
            </div>
            <div className="projectMiddlepart" id="worldEvoMiddlePart">
                <div className="projectInfoContainer">
                    <div className="projectText">
                        <p>A 2d clicker game about the world and its evolution.
                            Try to click your way through times and evolutions!
                        </p>
                    </div>
                    <div className="projectSkills">
                        <img src={UnityIcon} className="projectIcon" alt="projectIcon"/>
                        <img src={CSharpIcon} className="projectIcon" alt="projectIcon"/>
                    </div>
                </div>
                <img src={WorldEvolutionMainScreen} className="projectImage" alt="projectImage"/>
            </div>
            <div className="projectLowerpart">
                <img src={WorldEvolutionSatellite} className="projectImageSmallVert" alt="projectImage"/>
                <img src={WorldEvolutionLab} className="projectImageSmallVert" alt="projectImage"/>
                <img src={WorldEvolutionTasks} className="projectImageSmallVert" alt="projectImage"/>
                <img src={WorldEvolutionDialog} className="projectImageSmallVert" alt="projectImage"/>
            </div>
            <div className="viewButton">
                <a href="projects/dungeonHalls">
                    <button>View</button>
                </a>
            </div>
        </div>
    )
}