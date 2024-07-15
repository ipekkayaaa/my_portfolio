import logo from "../assets/ipekLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center">
                <img className="mx-2 w-40 h-70" src={logo} alt="logo"></img>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ipek-kaya/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ipekkayaaa" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/ipekkaaya" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
