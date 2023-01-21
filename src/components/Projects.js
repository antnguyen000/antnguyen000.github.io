import ProjectCard from "./ProjectCard"

const Projects = () => {
    const softwareProjects = [
        {
            title: "This Website!",
            information: "My portfolio website!",
            image: "website.jfif",
            skills: ["HTML", "CSS", "Javascript", "ReactJS"],
        },
        {
            title: "Pushup Counter App",
            information: "Computer vision program that counts front and side view pushups!",
            image: "pushup.png",
            skills: ["Python", "OpenCV", "MediaPipe"],
        },
    ]

    const mechanicalProjects = [
        {
            title: "RC Car Project",
            information: "Building a RC Car from scratch!",
            image: "rccar.PNG",
            skills: ["SolidWorks"],
        },
        {
            title: "Measuring Tape Reverse Engineering Project",
            information: "Deconstructing and modeling a measuring tape using SolidWorks",
            image: "measuringtape.png",
            skills: ["SolidWorks"],
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