"use client"

import ArrowDown from "../_components/_icons/ArrowDown";
import Image from "next/image";
import { motion } from "framer-motion";
import GameBox from "./_components/GameBox";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const audio = new Audio("")

export default function Page() {
    let [bg, setBg] = useState<any>(null)
    function playAudio(song: string, bg_param: string) {
        if(audio.src == song && !audio.paused) {
            audio.pause()
            setBg("")
            return
        }

        setBg(bg_param)
        audio.src = song
        audio.play()
    }

    const [games, setGames] = useState<any>([])

    async function fetchGames() {
        try {
            const { data } = await supabase.from('games').select("*")
            setGames(data)
            console.log(data)
        }
        catch{}
    }

    useEffect(() => {
        fetchGames()
    }, [])

    return (
        <main>
            <div>

                {/* hobbies-landing */}
                <div className="h-screen flex flex-col items-center">
                    <div className="h-5/6 w-5/6 flex flex-row flex-wrap-reverse justify-evenly items-center">
                        <div className="flex flex-col justify-center items-center gap-4 text-center text-white">
                            <motion.div initial={{ x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{ ease: "easeInOut", duration: 0.6 }}>
                                <h1 className="text-4xl font-bold">KNOW MY HOBBIES, KNOW ME MORE.</h1>
                            </motion.div>
                        </div>
                        <motion.div initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}>
                            <Image className="w-64 h-64 md:h-96 md:w-96" 
                            src="https://cdn.discordapp.com/attachments/1069940642521825320/1069940739263443035/pepe01.png" alt="Should be an icon here" 
                            width={420} height={420} />
                        </motion.div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
                        <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
                        <ArrowDown />
                    </div>
                </div>

                {/* hobbies-sleep */}
                <div className="h-screen flex flex-col items-center">
                    <div className="h-5/6 w-5/6 flex flex-row-reverse flex-wrap-reverse justify-evenly items-center">
                        <motion.div className="flex flex-col justify-center items-center gap-4 text-center text-white"
                        initial={{ x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: 0.6 }}>
                            <h1 className="text-4xl font-bold">SLEEPING.</h1>
                            <h2 className="text-xl">Humans spend 1/3 of their lifes for sleeping. I spend more.</h2>
                        </motion.div>
                        <div>
                            <motion.div initial={{ x: -100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{ ease: "easeInOut", duration: 0.6 }}>
                                <Image className="w-64 h-64 md:h-96 md:w-96 border-4" 
                            src="https://cdn.discordapp.com/attachments/1069940642521825320/1069942436178182145/bedge-pepe-sleep.gif" alt="Should be an icon here" 
                            width={420} height={420} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
                        <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
                        <ArrowDown />
                    </div>
                </div>

                {/* hobbies-gaming */}
                <div className="h-screen flex flex-col items-center duration-150">
                    <div className="h-5/6 w-5/6 flex flex-row flex-wrap-reverse justify-evenly items-center">
                        <motion.div className="flex flex-col justify-center items-center gap-4 text-center text-white"
                        initial={{ x: -100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: 0.6 }}>
                            <h1 className="text-4xl font-bold">PLAYING GAMES.</h1>
                            <h2 className="text-xl">Scroll down and look at top 10 games I`ve played so far!</h2>
                        </motion.div>
                        <div>
                            <motion.div initial={{ x: 100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{ ease: "easeInOut", duration: 0.6 }}>
                                <Image className="w-64 h-64 md:h-96 md:w-96" 
                                src="https://cdn.discordapp.com/attachments/1069940642521825320/1069947213230391336/peepo-chat.gif" alt="Should be an icon here" 
                                width={420} height={420} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
                        <h1 className="text-center text-ssm text-white font-bold">Next page contain audio.</h1>
                        <ArrowDown />
                    </div>
                </div>

                {/* hobbies-top10games */}
                <div style={{ backgroundColor: `${bg}` }} 
                className="h-auto min-h-screen flex flex-col justify-evenly items-center duration-1000">
                    <div className="h-5/6 w-5/6 flex flex-col justify-evenly items-center">
                        <div className="flex flex-col justify-evenly items-center gap-4">
                            <div className="flex flex-col mt-8 justify-top items-center gap-4 text-center text-white">
                                <h1 className="text-4xl font-bold">TOP 10 GAMES BY DODDY</h1>
                                <h2 className="text-l">(Click a card to play the OST, click again to stop.)</h2>
                            </div>
                            
                            <div className="flex flex-row flex-wrap justify-evenly items-center mx-8 my-8">
                                {games.map((i:any) => (
                                    <motion.button key={i.id} onClick={() => playAudio(i.music, i.bg_color)}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.4 },
                                    }}
                                    whileTap={{scale: 0.9}}>
                                        <GameBox obj={i}/>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
                        <ArrowDown />
                    </div>
                </div>
            </div>
        </main>
    )
}