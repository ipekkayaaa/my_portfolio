import { HERO_CONTENT } from "../constants";
import laptopPic from "../assets/laptop.png";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})
const Hero = () => {
    return (
        <div className="pb-0 lg:mb-35 -mt-10">
            <div className="flex flex-wrap">
                {/* Content Section */}
                <div className="w-full lg:flex lg:items-center">
                    <div className="lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start ">
                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-16 text-6xl font-bold tracking-tight lg:mt-10 lg:text-10xl">
                                Ipek Kaya
                            </motion.h1>
                            <motion.span
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-gradient-to-r from-green-200 via-slate-400 to-red-500 bg-clip-text text-3xl tracking-tight text-transparent">Software Engineer
                            </motion.span>
                            <motion.p
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}
                            </motion.p>
                        </div>
                    </div>
                    {/* Profile Image Section */}
                    <div className="hidden lg:block lg:w-1/2 lg:p-8">
                        <div className="flex justify-center mb-20">
                            <motion.img
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                src={laptopPic} alt="Ipek Kaya Profile"
                                className="w-3/4 h-600 max-w-900" />
                        </div>
                    </div>
                </div>
                {/* Profile Image Section (mobile view) */}
                <div className="w-full lg:hidden mb-16">
                    <div className="flex justify-center">
                        <img src={laptopPic} alt="Ipek Kaya Profile" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
