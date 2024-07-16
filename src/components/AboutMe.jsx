import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 id="about-me" className="my-29 text-center text-4xl">
                About
                <span className="text-neutral-500">Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div className="w-full lg:w-1/2 lg:p-8"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex item-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="About"></img>
                    </div>

                </motion.div>
                <motion.div className="w-full lg:w-1/2"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 mx-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe
