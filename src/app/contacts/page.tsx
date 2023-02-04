import Image from "next/image";
import ArrowDown from "../_components/_icons/ArrowDown";

export default function Page() {
  return (
    <main>
      {/* hobbies-landing */}
      <div className="flex h-screen flex-col items-center">
        <div className="flex h-5/6 w-5/6 flex-row flex-wrap-reverse items-center justify-evenly">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
            <div>
              <h1 className="text-4xl font-bold">WIP.</h1>
            </div>
          </div>
          <div>
            <Image
              className="h-64 w-64"
              src="https://cdn.discordapp.com/attachments/1069940642521825320/1069950565150359632/sad-jam-jamming.gif"
              alt="Should be an icon here"
              width={420}
              height={420}
            />
          </div>
        </div>
        <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
          <h1 className="text-ssm text-center font-bold text-white">
            Scroll Down!!
          </h1>
          <ArrowDown />
        </div>
      </div>
    </main>
  );
}
