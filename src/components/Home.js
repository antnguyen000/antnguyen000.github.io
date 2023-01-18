import About from "./About"
import Projects from "./Projects"
import SkillsSummary from "./SkillsSummary"

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">Anthony's Portfolio</h1>
            <About></About>
            <Projects></Projects>
            <SkillsSummary></SkillsSummary>
        </div>
    )
}

export default Home