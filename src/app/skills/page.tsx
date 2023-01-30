import ArrowDown from "../_components/_icons/ArrowDown";
import SkillBox from "./_components/SkillBox";
import CSharp from "./_components/_icons/C#";
import CPP from "./_components/_icons/C++";
import CSS from "./_components/_icons/CSS";
import HTML from "./_components/_icons/HTML";
import Javascript from "./_components/_icons/JavaScript";
import Next_js from "./_components/_icons/Next_js";
import Rust from "./_components/_icons/Rust";
import Tailwindcss from "./_components/_icons/Tailwindcss";
import TypeScript from "./_components/_icons/TypeScript";

const CS = <CSharp />;
const cpp = <CPP />;
const css = <CSS />;
const html = <HTML />;
const JS = <Javascript />;
const next_js = <Next_js />;
const rust = <Rust />;
const tailwindcss = <Tailwindcss />;
const TS = <TypeScript />;

//N0YVc1PfXKAZDVMP


export default function skills() {
    return (
        <main>
            <div className="bg-zinc-900">

                {/* skills-landing */}
                <div className="h-screen flex flex-col justify-evenly items-center">
                    <div className="h-5/6 w-5/6 flex flex-row justify-center items-center">
                        <h1 className="text-4xl font-bold text-center text-white">HERE`S PROGRAMMING LANGUAGES AND TECHNOLOGIES I`VE BEEN LEARNING.</h1>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center">
                        <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
                        <ArrowDown />
                    </div>
                </div>

                {/* skills-web */}
                <div className="h-auto min-h-screen flex flex-col justify-evenly items-center">
                    <div className="h-5/6 w-5/6 flex flex-col justify-evenly items-center">
                        <div className="flex flex-col justify-evenly items-center gap-4">
                            <h1 className="text-4xl font-bold text-center text-white">FOR WEB APPS.</h1>
                            <div className="flex flex-row flex-wrap justify-evenly items-center mx-8 my-8">
                                <SkillBox logo={ TS }
                                name="TypeScript" 
                                year="0.02" />
                                <SkillBox logo={ JS }
                                name="JavaScript" 
                                year="0.02" />
                                <SkillBox logo={ html }
                                name="HTML" 
                                year="0.02" />
                                <SkillBox logo={ css }
                                name="CSS" 
                                year="0.02" />
                                <SkillBox logo={ tailwindcss }
                                name="Tailwindcss" 
                                year="0.02" />
                                <SkillBox logo={ next_js }
                                name="Next.Js" 
                                year="0.02" />
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center">
                        <h1 className="text-center text-ssm text-white font-bold"></h1>
                        <ArrowDown />
                    </div>
                </div>

                {/* skills-desktop */}
                <div className="h-auto min-h-screen flex flex-col justify-evenly items-center">
                    <div className="h-5/6 w-5/6 flex flex-col justify-evenly items-center">
                        <div className="flex flex-col justify-evenly items-center gap-4">
                            <h1 className="text-4xl font-bold text-center text-white">FOR DESKTOP APPS.</h1>
                            <div className="flex flex-row flex-wrap justify-evenly items-center mx-8 my-8">
                                <SkillBox logo={ CS }
                                name="C#" 
                                year="0.5" />
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center">
                        <h1 className="text-center text-ssm text-white font-bold"></h1>
                        <ArrowDown />
                    </div>
                </div>

                {/* skills-multi */}
                <div className="h-auto min-h-screen flex flex-col justify-evenly items-center">
                    <div className="h-5/6 w-5/6 flex flex-col justify-evenly items-center">
                        <div className="flex flex-col justify-evenly items-center gap-4">
                            <h1 className="text-4xl font-bold text-center text-white">MULTI-PURPOSES.</h1>
                            <div className="flex flex-row flex-wrap justify-evenly items-center mx-8 my-8">
                                <SkillBox logo={ cpp }
                                name="C++" 
                                year="1" />
                                <SkillBox logo={ rust }
                                name="Rust" 
                                year="0.01" />
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center">
                        <h1 className="text-center text-ssm text-white font-bold">Finn.</h1>
                    </div>
                </div>

            </div>
        </main>
    );
};