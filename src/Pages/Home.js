import ProfilePicture from "../Components/ProfilePicture.js";
export default function Home(){
    return (
        <div className="homeContainer">
            <div className="homeTextAlligner">
                <div className="homeText">
                    <h2>Hello, I'm</h2>
                    <h1 id="Name">Milan Rahmie</h1>
                    <h2>Game Developer | Sintlucas student</h2>
                </div>
            </div>
            <ProfilePicture/>
        </div>
    )
}