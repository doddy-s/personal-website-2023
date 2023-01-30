import ArrowDown from "../_components/_icons/ArrowDown"
import SkillBox from "./_components/SkillBox"
import CSharp from "./_components/_icons/C#"
import CPP from "./_components/_icons/C++"
import CSS from "./_components/_icons/CSS"
import HTML from "./_components/_icons/HTML"
import Javascript from "./_components/_icons/JavaScript"
import Next_js from "./_components/_icons/Next_js"
import Rust from "./_components/_icons/Rust"
import Tailwindcss from "./_components/_icons/Tailwindcss"
import TypeScript from "./_components/_icons/TypeScript"

const CS = <CSharp />
const cpp = <CPP />
const css = <CSS />
const html = <HTML />
const JS = <Javascript />
const next_js = <Next_js />
const rust = <Rust />
const tailwindcss = <Tailwindcss />
const TS = <TypeScript />


//N0YVc1PfXKAZDVMP
import { supabase } from "../../lib/supabaseClient"
const a: any = new Date().toDateString();

//type prolang = {id: any, name: string, learning_since: Date}

async function Page() {
    const webs = await supabase.from('programming').select("*").eq("type", 0)
    const desktops = await supabase.from('programming').select("*").eq("type", 1)
    const multipurposes = await supabase.from('programming').select("*").eq("type", 2)
    const databases = await supabase.from('programming').select("*").eq("type", 3)
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
                                {webs.data?.map((i:any) => (
                                    <SkillBox key={ i.id }
                                    name={ i.name } 
                                    date={ i.learning_since }
                                    logo={ i.logo } />
                                ))}
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
                                {desktops.data?.map((i:any) => (
                                    <SkillBox key={ i.id }
                                    name={ i.name } 
                                    date={ i.learning_since }
                                    logo={ i.logo } />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center">
                        <h1 className="text-center text-ssm text-white font-bold"></h1>
                        <ArrowDown />
                    </div>
                </div>

                {/* skills-database */}
                <div className="h-auto min-h-screen flex flex-col justify-evenly items-center">
                    <div className="h-5/6 w-5/6 flex flex-col justify-evenly items-center">
                        <div className="flex flex-col justify-evenly items-center gap-4">
                            <h1 className="text-4xl font-bold text-center text-white">DATABASES.</h1>
                            <div className="flex flex-row flex-wrap justify-evenly items-center mx-8 my-8">
                                {databases.data?.map((i:any) => (
                                    <SkillBox key={ i.id }
                                    name={ i.name } 
                                    date={ i.learning_since }
                                    logo={ i.logo } />
                                ))}
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
                                {multipurposes.data?.map((i:any) => (
                                    <SkillBox key={ i.id }
                                    name={ i.name } 
                                    date={ i.learning_since }
                                    logo={ i.logo } />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center">
                        <h1 className="text-center text-ssm text-white font-bold">Finn.</h1>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Page