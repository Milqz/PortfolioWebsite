import csharpIcon from "../img/Icons/csharpIcon.png";

export default function CSharpSkill(){
    return (
        <div className="skillTile">
            <img src={csharpIcon} alt="csharp"/>
            <div className="skillTexts">
                <h2>C-Sharp</h2>
                <p>C# is a flexible, object-oriented language by Microsoft, used for Windows apps, web development,
                    and game design. It's known for readability and strong performance.</p>
            </div>
        </div>
    )
}