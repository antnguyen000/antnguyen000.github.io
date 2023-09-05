import portrait from "../images/portrait.JPG"

const About = () => {
    return (
        <div className="about" id="about">
            <img src={ portrait } alt="portrait"></img>
            <div className="about-text">
                <h2>Hello!</h2>
                <h2>My name is Anthony Nguyen!</h2>
                <p>I am a 4th year mechanical engineering student at the University of Texas at Austin with building ineterest in software engineering! I am pursuing the UT Austin Elements of Computing certificate to expand my knowledge of programming and I hope to work with software in the future!</p>
            </div>
        </div>
    )
}

export default About