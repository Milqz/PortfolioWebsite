import UnitySkill from "../Components/UnitySkill";
import CSharpSkill from "../Components/CSharpSkill";
import CSSkill from "../Components/CSSSkill";
import HtmlSkill from "../Components/HTMLSkill";
import ReactSkill from "../Components/ReactSkill";

export default function Skills(){
    return (
        <div className="container">
            <h1>Skills</h1>
            <div id="skills">
                <UnitySkill/>
                <CSharpSkill/>
                <HtmlSkill/>
                <CSSkill/>
                <ReactSkill/>
            </div>
        </div>
    )
}