import ProjectCard from "./ProjectCard"

const Projects = () => {
    const softwareProjects = [
        {
            title: "This Website!",
            information: "My portfolio website!",
            image: "website.jfif",
            skills: ["HTML", "CSS", "Javascript", "ReactJS"],
            link:null,
        },
        {
            title: "Pushup Counter App",
            information: "Computer vision program that counts front and side view pushups!",
            image: "pushup.png",
            skills: ["Python", "OpenCV", "MediaPipe"],
            link: "https://github.com/antnguyen000/pushup-counter-app",
        },
    ]

    const mechanicalProjects = [
        {
            title: "Delivery Drone",
            information: "Building drone to carry small packages!",
            image: "drone.jpg",
            skills: ["SolidWorks"],
            link: "https://drive.google.com/file/d/1NetlUs5OZoXgyQPW4nQqsN1GmcW4_-uK/view?usp=sharing",
        },
        {
            title: "RC Car Project",
            information: "Building a RC Car from scratch!",
            image: "rccar.PNG",
            skills: ["SolidWorks"],
            link: "https://drive.google.com/file/d/1Hnxgiip1YeyxBFH0v472_-SEqQ78xqqk/view?usp=sharing",
        },
        {
            title: "Measuring Tape Reverse Engineering Project",
            information: "Deconstructing and modeling a measuring tape using SolidWorks",
            image: "measuringtape.png",
            skills: ["SolidWorks"],
            link: "https://drive.google.com/file/d/1xGxlpqhSRoDky7R-i2xrSREMrGeQKdZi/view?usp=sharing",
        },
    ]

    return (
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <h3>Software</h3>
                <div className="software-cards">
                    {softwareProjects.map((subproject) => (
                        <ProjectCard project={ subproject } ></ProjectCard>
                    ))}
                </div>
            <h3>Mechanical</h3>
                <div className="mechanical-cards">
                    {mechanicalProjects.map((subproject) => (
                        <ProjectCard project={ subproject } ></ProjectCard>
                    ))}
                </div>
        </div>
    )
}

export default Projects