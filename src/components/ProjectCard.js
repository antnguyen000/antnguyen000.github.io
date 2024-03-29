const ProjectCard = (project) => {
    return (
        <div className="project-card">
          <div className="card-image">
            <img src={ require(`../images/project-card-images/${project.project.image}`) } alt=""></img>
          </div>
          <div className="card-body">
            <h4 className="card-title">{ project.project.title }</h4>
            <p>{ project.project.information }</p>
            <h4 className="skills-title">Skills</h4>
            {project.project.skills.map((skill) => (
              <button className="skill-btn">{ skill }</button>
            ))}
          </div>
          { project.project.link && <button className="project-link-btn"><a href={ project.project.link } target="_blank" rel="noreferrer">Check it out!</a></button> }

        </div>
    )
}

export default ProjectCard