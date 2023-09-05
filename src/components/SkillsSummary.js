const SkillsSummary = () => {
    const languages = ["Python", "MATLAB", "R", "HTML", "CSS", "JavaScript", "Swift"]
    const frameworks = ["React"]
    const engineering = ["SolidWorks"]

    return (
        <div className="skills-summary">
            <h2>Skills Summary</h2>
            <h3 className="skills-summary-header">Languages</h3>
            <div className="skills-block">
                {languages.map((language) => (
                    <div className="skills-button">{ language }</div>
                ))}
            </div>
            <h3 className="skills-summary-header">Frameworks</h3>
            <div className="skills-block">
                {frameworks.map((framework) => (
                    <div className="skills-button">{ framework }</div>
                ))}
            </div>
            <h3 className="skills-summary-header">Engineering</h3>
            <div className="skills-block">
                {engineering.map((tool) => (
                    <div className="skills-button">{ tool }</div>
                ))}
            </div>
        </div>
    )
}

export default SkillsSummary