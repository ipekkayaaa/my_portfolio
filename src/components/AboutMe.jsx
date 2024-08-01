import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <div className="border-b -mt-3 border-neutral-900 pb-20 flex justify-center">
            <div className="w-full max-w-3xl bg-red-200 bg-opacity-50 p-6 rounded-lg">
                <h1 id="about-me" className="text-center text-4xl mb-6">
                    About <span className="text-neutral-800">Me</span>
                </h1>
                <div className="flex flex-wrap justify-center">
                    <motion.div className="w-full"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center justify-center">
                            <p className="my-1 max-w-3xl py-0 text-center">{ABOUT_TEXT}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
