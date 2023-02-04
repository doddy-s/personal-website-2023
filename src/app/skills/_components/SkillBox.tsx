"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function SkillBox({ obj }: any) {
  return (
    <a href={obj.hyperlink} target="_blank" rel="noreferrer">
      <motion.div
        className="m-4 flex h-28 w-72 flex-row justify-between rounded-md bg-black 
                p-4 text-white
                shadow-2xl hover:bg-white
                hover:text-black"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.25 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="mr-8 flex h-20 w-20 items-center justify-center">
          <Image src={obj.logo} alt="INI LOGO" width={80} height={80} />
        </div>
        <div className="text-right">
          <h1 className="text-bold text-2xl">{obj.name}</h1>
          <h2 className="text-sm">
            Since <br />
            {obj.learning_since}
          </h2>
        </div>
      </motion.div>
    </a>
  );
}
