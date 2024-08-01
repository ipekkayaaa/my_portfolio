import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                id="experience"
                className="my-20 text-center text-4xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex justify-center">
                        <motion.div
                            className="w-full max-w-4xl lg:max-w-5xl p-6 rounded-lg bg-opacity-50 bg-blue-200"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1 }}
                        >
                            <h6 className="text-lg font-semibold text-white text-center mb-2">
                                {experience.role} -{" "}
                                <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-2 text-sm text-white text-center">
                                {experience.year}
                            </p>
                            <ul className="mb-4 text-neutral-800 list-disc list-inside">
                                {experience.description.split('•').filter(Boolean).map((sentence, index) => (
                                    <li key={index} className="mb-2">
                                        {sentence.trim()}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap justify-center gap-2 text-center">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
