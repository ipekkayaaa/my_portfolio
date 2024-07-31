import logo from "../assets/ipekLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar mb-20 flex items-center justify-between py-6">
            <div className="flex items-center">
                <img className="mx-2 w-24 h-auto" src={logo} alt="logo" />
            </div>
            <div className="flex items-center space-x-6">
                {/* Scroll Links to different sections */}
                <ScrollLink
                    activeClass="active"
                    to="about-me"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
                >
                    About Me
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
                >
                    Tech Stack
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
                >
                    Experience
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
                >
                    Projects
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
                >
                    Contact
                </ScrollLink>
            </div>
            <div id="social-icons" className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ipek-kaya/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com/ipekkayaaa" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://www.instagram.com/ipekkaaya" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
            </div>
            <style jsx>{`
                .navbar {
                    color: #FBFBFB; /* Default text color */
                    height: 100px; /* Set a fixed height */
                    display: flex;
                    align-items: center; /* Vertically align items */
                    margin-top:20px;
                    border-radius: 10px;
                }
                .nav-link {
                    text-decoration: none;
                    color: #FBFBFB; /* Default text color */
                    cursor: pointer;
                }

                .nav-link:hover {
                    text-decoration: underline;
                    color: #C1E77A; /* Hover text color */
                }

                .social-icon {
                    color: #FBFBFB; /* Default icon color */
                    transition: color 0.3s ease; /* Smooth transition for color change */
                }

                .social-icon:hover {
                    color: #C1E77A; /* Hover icon color */
                }
            `}</style>
        </nav>
    );
}

export default Navbar;
