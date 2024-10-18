import { RiFlutterLine } from "react-icons/ri"
import { RiReactjsLine } from "react-icons/ri"
import { BiLogoSpringBoot } from "react-icons/bi"
import { TbSql } from "react-icons/tb"
import { RiJavaLine } from "react-icons/ri"
import { RiHtml5Line } from "react-icons/ri"
import { RiCss3Line } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { RiBootstrapLine } from "react-icons/ri"
import { motion } from "framer-motion"

const iconVariables = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technology = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technology</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariables(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFlutterLine className="text-6xl text-blue-500 " />
                </motion.div>
                <motion.div
                    variants={iconVariables(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-6xl text-cyan-400 " />

                </motion.div>
                <motion.div
                    variants={iconVariables(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoSpringBoot className="text-6xl text-green-600 " />

                </motion.div>
                <motion.div
                    variants={iconVariables(6.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbSql className="text-6xl text-blue-300 " />

                </motion.div>
                <motion.div
                    variants={iconVariables(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavaLine className="text-6xl text-red-700 " />

                </motion.div>
                <motion.div
                    variants={iconVariables(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiHtml5Line className="text-6xl text-orange-500 " />

                </motion.div>
                <motion.div
                    variants={iconVariables(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiCss3Line className="text-6xl text-blue-800 " />
                </motion.div>
                <motion.div
                    variants={iconVariables(6.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-6xl text-yellow-400 " />
                </motion.div>
                <motion.div
                    variants={iconVariables(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiBootstrapLine className="text-6xl text-purple-800 " />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technology
