import unityIcon from "../img/Icons/unityIcon.png";

export default function UnitySkill(){
    return (
        <div className="skillTile">
            <img src={unityIcon} alt="unityIcon"/>
            <div className="skillTexts">
                <h2>Unity</h2>
                <p>Unity is a popular game engine used to create 2D and 3D games and interactive experiences. It
                    supports
                    multiple platforms and is known for its user-friendly interface and powerful features.</p>
            </div>
        </div>
    )
}