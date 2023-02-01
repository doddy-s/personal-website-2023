"use client"
import Image from "next/image";
import { motion } from "framer-motion"
export default function GameBox({ logo, name }: any) {
    return (
        <motion.div className="w-72 h-28 p-4 m-4 rounded-md flex flex-row justify-between 
        bg-black hover:bg-white
        text-white hover:text-black
        shadow-2xl"
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
            }}
        whileTap={{ scale: 0.9 }}>
            <div className="flex w-20 h-20 mr-8 items-center justify-center">
                <Image src={ logo } alt="INI LOGO" width={80} height={80} />
            </div>
            <div className="text-right">
                <h1 className="text-2xl text-bold">{ name }</h1>
            </div>
        </motion.div>
    )
}