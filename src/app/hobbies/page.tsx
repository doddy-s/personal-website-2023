"use client";

import ArrowDown from "../_components/_icons/ArrowDown";
import Image from "next/image";
import { motion } from "framer-motion";
import GameBox from "./_components/GameBox";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Page() {
  const [audio, setAudio] = useState<any>(null);

  useEffect(() => {
    setAudio(new Audio(""));
  }, []);

  let [bg, setBg] = useState<any>(null);

  function playAudio(song: string, bg_param: string) {
    if (audio.src == song && !audio.paused) {
      audio.pause();
      setBg("");
      return;
    }

    setBg(bg_param);
    audio.src = song;
    audio.play();
  }

  const [games, setGames] = useState<any>([]);
  const [movies, setMovies] = useState<any>([]);

  async function fetchGames() {
    try {
      const { data } = await supabase.from("games").select("*");
      setGames(data);
      console.log(data);
    } catch {}
  }

  async function fetchMovies() {
    try {
      const { data } = await supabase.from("movies").select("*");
      setMovies(data);
      console.log(data);
    } catch {}
  }

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="m-0">
      {/* hobbies-landing */}
      <div className="flex h-screen flex-col items-center">
        <div className="flex h-5/6 w-11/12 flex-row flex-wrap-reverse items-center justify-evenly">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
            <motion.div
              initial={{ x: -12, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.6,
              }}
            >
              <h1 className="text-4xl font-bold">
                KNOW MY HOBBIES, KNOW ME MORE.
              </h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 12, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              className="h-64 w-64"
              src="https://cdn.discordapp.com/attachments/1069940642521825320/1069940739263443035/pepe01.png"
              alt="Should be an icon here"
              width={420}
              height={420}
            />
          </motion.div>
        </div>
        <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
          <h1 className="text-ssm text-center font-bold text-white">
            Scroll Down!!
          </h1>
          <ArrowDown />
        </div>
      </div>

      {/* hobbies-sleep */}
      <div className="flex h-screen flex-col items-center">
        <div className="flex h-5/6 w-11/12 flex-row-reverse flex-wrap-reverse items-center justify-evenly">
          <motion.div
            className="flex flex-col items-center justify-center gap-4 text-center text-white"
            initial={{ x: 12, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold">SLEEPING.</h1>
            <h2 className="text-xl">
              Humans spend 1/3 of their lifes for sleeping. I spend more.
            </h2>
          </motion.div>
          <div>
            <motion.div
              initial={{ x: -12, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.6,
              }}
            >
              <Image
                className="h-64 w-64"
                src="https://cdn.discordapp.com/attachments/1069940642521825320/1070417343869636628/sleepy-bed.gif"
                alt="Should be an icon here"
                width={420}
                height={420}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
          <h1 className="text-ssm text-center font-bold text-white">
            Scroll Down!!
          </h1>
          <ArrowDown />
        </div>
      </div>

      {/* hobbies-coding */}
      <div className="flex h-screen flex-col items-center">
        <div className="flex h-5/6 w-11/12 flex-row flex-wrap-reverse items-center justify-evenly">
          <motion.div
            className="flex w-auto flex-col items-center justify-center gap-4 text-center text-white md:w-1/2"
            initial={{ x: -12, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold">CODING.</h1>
            <h2 className="text-xl">
              &quot;Building website from scratch is hard. With framework,
              it&apos;s even harder because you need to choose the best
              framework.&quot;
            </h2>
          </motion.div>
          <div>
            <motion.div
              initial={{ x: 12, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.6,
              }}
            >
              <Image
                className="h-64 w-64"
                src="https://cdn.discordapp.com/attachments/1069940642521825320/1069950565951471676/pepega-hackermans.gif"
                alt="Should be an icon here"
                width={420}
                height={420}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
          <h1 className="text-ssm text-center font-bold text-white">
            Scroll Down!!
          </h1>
          <ArrowDown />
        </div>
      </div>

      {/* hobbies-gaming */}
      <div className="flex h-screen flex-col items-center">
        <div className="flex h-5/6 w-11/12 flex-row-reverse flex-wrap-reverse items-center justify-evenly">
          <motion.div
            className="flex flex-col items-center justify-center gap-4 text-center text-white"
            initial={{ x: 12, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold">GAMING.</h1>
            <h2 className="text-xl">
              Scroll down and look at top 10 games I&apos;ve played so far!
            </h2>
          </motion.div>
          <div>
            <motion.div
              initial={{ x: -12, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.6,
              }}
            >
              <Image
                className="h-64 w-64"
                src="https://cdn.discordapp.com/attachments/1069940642521825320/1069947213230391336/peepo-chat.gif"
                alt="Should be an icon here"
                width={420}
                height={420}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
          <h1 className="text-ssm text-center font-bold text-white">
            Next page contains audio.
          </h1>
          <ArrowDown />
        </div>
      </div>

      {/* hobbies-top10games */}
      <div
        style={{ backgroundColor: `${bg}` }}
        className="flex h-auto min-h-screen flex-col items-center justify-evenly duration-1000"
      >
        <div className="flex h-5/6 w-11/12 flex-col items-center justify-evenly">
          <div className="flex flex-col items-center justify-evenly gap-4">
            <div className="justify-top mt-12 flex flex-col items-center gap-4 text-center text-white">
              <h1 className="text-4xl font-bold">TOP 10 GAMES BY ME</h1>
              <h2 className="text-l">
                (Click a card to play the OST, click again to stop.)
              </h2>
            </div>

            <div className="mx-8 my-8 flex flex-row flex-wrap items-center justify-evenly gap-6">
              {games.map((i: any) => (
                <motion.button
                  key={i.id}
                  onClick={() => playAudio(i.music, i.bg_color)}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GameBox obj={i} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
          <ArrowDown />
        </div>
      </div>

      {/* hobbies-watching */}
      <div className="flex h-screen flex-col items-center">
        <div className="flex h-5/6 w-11/12 flex-row flex-wrap-reverse items-center justify-evenly">
          <motion.div
            className="flex w-1/2 flex-col items-center justify-center gap-4 text-center text-white"
            initial={{ x: -12, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold">WATCHING MOVIES.</h1>
          </motion.div>
          <div>
            <motion.div
              initial={{ x: 12, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.6,
              }}
            >
              <Image
                className="h-64 w-64"
                src="https://cdn.discordapp.com/attachments/1069940642521825320/1070416722126962808/pepocorn-eat.gif"
                alt="Should be an icon here"
                width={420}
                height={420}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
          <h1 className="text-ssm text-center font-bold text-white">
            Next page contains audio.
          </h1>
          <ArrowDown />
        </div>
      </div>

      {/* hobbies-top10movies */}
      <div
        style={{ backgroundColor: `${bg}` }}
        className="flex h-auto min-h-screen flex-col items-center justify-evenly duration-1000"
      >
        <div className="flex h-5/6 w-11/12 flex-col items-center justify-evenly">
          <div className="flex flex-col items-center justify-evenly gap-4">
            <div className="justify-top mt-12 flex flex-col items-center gap-4 text-center text-white">
              <h1 className="text-4xl font-bold">TOP 10 MOVIES BY ME</h1>
              <h2 className="text-l">
                (Click a card to play the OST, click again to stop.)
              </h2>
            </div>

            <div className="mx-8 my-8 flex flex-row flex-wrap items-center justify-evenly gap-6">
              {movies.map((i: any) => (
                <motion.button
                  key={i.id}
                  onClick={() => playAudio(i.music, i.bg_color)}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GameBox obj={i} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}
