import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                id="contact"
                className="text-center my-10 text-4xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >Contact</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p className="my-4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                >{CONTACT.address}</motion.p>
                <motion.p className="my-4"

                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}

                >{CONTACT.phoneNo}</motion.p>
                <a herf="#">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    )
}

export default Contact
