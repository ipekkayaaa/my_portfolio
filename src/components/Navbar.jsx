import logo from "../assets/ipekLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar mb-20 flex flex-wrap items-center justify-between py-6 px-4">
            <div className="flex items-center">
                <img className="w-24 h-auto" src={logo} alt="logo" />
            </div>
            <div className="flex flex-wrap items-center space-x-4 md:space-x-10">
                {/* Scroll Links to different sections */}
                <ScrollLink
                    activeClass="active"
                    to="about-me"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link text-l"
                >
                    About Me
                </ScrollLink>
                {/* <ScrollLink
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link text-l"
                >
                    Tech Stack
                </ScrollLink> */}
                <ScrollLink
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link text-l"
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
                    className="nav-link text-l"
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
                    className="nav-link text-l"
                >
                    Contact
                </ScrollLink>
            </div>
            <div id="social-icons" className="flex flex-wrap items-center justify-center gap-4 text-2xl mt-4">
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
                    height: auto; /* Allow height to adjust based on content */
                    display: flex;
                    align-items: center; /* Vertically align items */
                    margin-top: 20px;
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
