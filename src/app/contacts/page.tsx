import Image from "next/image"
import ArrowDown from "../_components/_icons/ArrowDown"

export default function Page() {
    return (
        <main>
            
            {/* hobbies-landing */}
            <div className="h-screen flex flex-col items-center">
                    <div className="h-5/6 w-5/6 flex flex-row flex-wrap-reverse justify-evenly items-center">
                        <div className="flex flex-col justify-center items-center gap-4 text-center text-white">
                            <div>
                                <h1 className="text-4xl font-bold">WIP.</h1>
                            </div>
                        </div>
                        <div>
                            <Image className="w-64 h-64" 
                            src="https://cdn.discordapp.com/attachments/1069940642521825320/1069950565150359632/sad-jam-jamming.gif" alt="Should be an icon here" 
                            width={420} height={420} />
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
                        <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
                        <ArrowDown />
                    </div>
                </div>

        </main>
    )
}