import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/antnguyen000"><BsGithub size={ 50 }/></a>
            <a href="https://linkedin.com/in/anthony-nguyen-b0b15a232"><BsLinkedin size={ 50 }/></a>
        </div>
    )
}

export default Footer