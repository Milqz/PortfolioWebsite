import reactIcon from "../img/Icons/react.512x456.png";

export default function ReactSkill() {
    return (
        <div className="skillTile">
            <img src={reactIcon} alt="csharp"/>
            <div className="skillTexts">
                <h2>React</h2>
                <p>React is a JavaScript library for building dynamic user interfaces, especially single-page applications. Known for its efficiency and component-based structure, it makes UI development faster and more modular.</p>
            </div>
        </div>
    )
}