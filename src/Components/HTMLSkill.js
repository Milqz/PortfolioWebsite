import htmlIcon from "../img/Icons/html5.png";

export default function HTMLSkill(){
    return (
        <div className="skillTile">
            <img src={htmlIcon} alt="csharp"/>
            <div className="skillTexts">
                <h2>HTML</h2>
                <p>HTML (HyperText Markup Language) is the standard language for structuring content on the web, creating elements like headings, paragraphs, links, and images. It forms the backbone of all websites.</p>
            </div>
        </div>
    )
}