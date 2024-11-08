import AboutMePicture from "../Components/AboutMePicture";
export default function About() {
    return(
        <div className="container">
            <div id="aboutMeText">
                <h1>About me</h1>
                <div className="aboutMeAligner">
                    <AboutMePicture/>
                    <div>
                        <div className="aboutMeInfoPlanes">
                            <div className="aboutMePlane">
                                <h2>Experience</h2>
                                <p>2 years+</p>
                            </div>
                        </div>
                        <div id="aboutMeDescription">
                            <div>
                                <h2>Hi, I’m Milan Rahmie,</h2>
                                <p>
                                    A software development student at SintLucas in the Netherlands. My
                                    passion for game development started when I was 14, and since then, I’ve been
                                    focused on
                                    mastering the art of coding. I’m dedicated to improving my skills and constantly
                                    pushing
                                    myself to create better, more innovative projects. Hardworking and motivated, I
                                    thrive
                                    on challenges and love collaborating with others to bring ideas to life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}