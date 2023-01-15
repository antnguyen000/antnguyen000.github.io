import About from "./About"
import Projects from "./Projects"

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">Anthony's Portfolio</h1>
            <About></About>
            <Projects></Projects>
        </div>
    )
}

export default Home