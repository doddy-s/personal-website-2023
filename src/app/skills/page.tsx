import ArrowDown from "../_components/_icons/ArrowDown"
import SkillBox from "./_components/SkillBox"
import Image from "next/image";

//N0YVc1PfXKAZDVMP
import { supabase } from "../../lib/supabaseClient"

export default async function Page() {
    const webs = await supabase.from('programming').select("*").eq("type", 0)
    const desktops = await supabase.from('programming').select("*").eq("type", 1)
    const multipurposes = await supabase.from('programming').select("*").eq("type", 2)
    const databases = await supabase.from('programming').select("*").eq("type", 3)
    //console.log(webs)
    return (
        <main>
            <div className="px-8">

                {/* skills-landing */}
                <div className="h-screen flex flex-col justify-evenly items-center">
                    <div className="h-5/6 w-5/6 flex flex-row justify-center items-center">
                        <h1 className="text-4xl font-bold text-center text-white">HERE&apos;S PROGRAMMING LANGUAGES AND TECHNOLOGIES I&apos;VE BEEN LEARNING.</h1>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center animate-bounce">
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
                                    obj={ i } />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center animate-bounce">
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
                                    obj={ i } />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center animate-bounce">
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
                                    obj={ i } />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center animate-bounce">
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
                                    obj={ i } />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
                        <ArrowDown />
                    </div>
                </div>

                {/* skills-quotes */}
                <div className="h-screen flex flex-col items-center">
                    <div className="h-5/6 w-5/6 flex flex-col-reverse flex-wrap justify-evenly items-center">
                        <div className="flex flex-col justify-center items-center gap-4 text-center text-white">
                            <h1 className="text-4xl font-bold">&quot;From great skill comes great money to pay the bill.&quot;</h1>
                            <h2 className="text-xl">~~Master Oogway~~</h2>
                        </div>
                        <div>
                            <Image className="md:h-64 md:w-96 border-4" 
                            src="https://cdn.discordapp.com/attachments/1069940642521825320/1070109666299887636/kung-fu-panda-master-oogway.gif" alt="Should be an icon here" 
                            width={498} height={278} />
                        </div>
                    </div>
                    <div className="h-1/6 flex flex-col justify-end items-center">
                        <h1 className="text-center text-ssm text-white font-bold">Fin.</h1>
                    </div>
                </div>

            </div>
        </main>
    )
}