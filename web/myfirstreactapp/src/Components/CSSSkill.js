import cssIcon from "../img/Icons/css.png";

export default function CSSSkill() {
    return (
        <div className="skillTile">
            <img src={cssIcon} alt="csharp"/>
            <div className="skillTexts">
                <h2>CSS</h2>
                <p>CSS (Cascading Style Sheets) is used to style and layout web pages, controlling colors, fonts, spacing, and overall design. It helps make websites visually appealing and responsive across devices.</p>
            </div>
        </div>
    )
}