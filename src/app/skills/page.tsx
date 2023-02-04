import ArrowDown from "../_components/_icons/ArrowDown";
import SkillBox from "./_components/SkillBox";
import Image from "next/image";

//N0YVc1PfXKAZDVMP
import { supabase } from "../../lib/supabaseClient";

export default async function Page() {
  const webs = await supabase.from("programming").select("*").eq("type", 0);
  const desktops = await supabase.from("programming").select("*").eq("type", 1);
  const multipurposes = await supabase
    .from("programming")
    .select("*")
    .eq("type", 2);
  const databases = await supabase
    .from("programming")
    .select("*")
    .eq("type", 3);
  //console.log(webs)
  return (
    <main>
      <div className="px-8">
        {/* skills-landing */}
        <div className="flex h-screen flex-col items-center justify-evenly">
          <div className="flex h-5/6 w-5/6 flex-row items-center justify-center">
            <h1 className="text-center text-4xl font-bold text-white">
              HERE&apos;S PROGRAMMING LANGUAGES AND TECHNOLOGIES I&apos;VE BEEN
              LEARNING.
            </h1>
          </div>
          <div className="flex h-1/6 animate-bounce flex-col items-center justify-end">
            <h1 className="text-ssm text-center font-bold text-white">
              Scroll Down!!
            </h1>
            <ArrowDown />
          </div>
        </div>

        {/* skills-web */}
        <div className="flex h-auto min-h-screen flex-col items-center justify-evenly">
          <div className="flex h-5/6 w-5/6 flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-evenly gap-4">
              <h1 className="text-center text-4xl font-bold text-white">
                FOR WEB APPS.
              </h1>
              <div className="mx-8 my-8 flex flex-row flex-wrap items-center justify-evenly">
                {webs.data?.map((i: any) => (
                  <SkillBox key={i.id} obj={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-1/6 animate-bounce flex-col items-center justify-end">
            <h1 className="text-ssm text-center font-bold text-white"></h1>
            <ArrowDown />
          </div>
        </div>

        {/* skills-desktop */}
        <div className="flex h-auto min-h-screen flex-col items-center justify-evenly">
          <div className="flex h-5/6 w-5/6 flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-evenly gap-4">
              <h1 className="text-center text-4xl font-bold text-white">
                FOR DESKTOP APPS.
              </h1>
              <div className="mx-8 my-8 flex flex-row flex-wrap items-center justify-evenly">
                {desktops.data?.map((i: any) => (
                  <SkillBox key={i.id} obj={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-1/6 animate-bounce flex-col items-center justify-end">
            <h1 className="text-ssm text-center font-bold text-white"></h1>
            <ArrowDown />
          </div>
        </div>

        {/* skills-database */}
        <div className="flex h-auto min-h-screen flex-col items-center justify-evenly">
          <div className="flex h-5/6 w-5/6 flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-evenly gap-4">
              <h1 className="text-center text-4xl font-bold text-white">
                DATABASES.
              </h1>
              <div className="mx-8 my-8 flex  flex-row flex-wrap items-center justify-evenly">
                {databases.data?.map((i: any) => (
                  <SkillBox key={i.id} obj={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-1/6 animate-bounce flex-col items-center justify-end">
            <h1 className="text-ssm text-center font-bold text-white"></h1>
            <ArrowDown />
          </div>
        </div>

        {/* skills-multi */}
        <div className="flex h-auto min-h-screen flex-col items-center justify-evenly">
          <div className="flex h-5/6 w-5/6 flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-evenly gap-4">
              <h1 className="text-center text-4xl font-bold text-white">
                MULTI-PURPOSES.
              </h1>
              <div className="mx-8 my-8 flex flex-row flex-wrap items-center justify-evenly">
                {multipurposes.data?.map((i: any) => (
                  <SkillBox key={i.id} obj={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
            <ArrowDown />
          </div>
        </div>

        {/* skills-quotes */}
        <div className="flex h-screen flex-col items-center">
          <div className="flex h-5/6 w-5/6 flex-col-reverse flex-wrap items-center justify-evenly">
            <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
              <h1 className="text-4xl font-bold">
                &quot;From great skill comes great money to pay the bill.&quot;
              </h1>
              <h2 className="text-xl">~~Master Oogway~~</h2>
            </div>
            <div>
              <Image
                className="border-4 md:h-64 md:w-96"
                src="https://cdn.discordapp.com/attachments/1069940642521825320/1070109666299887636/kung-fu-panda-master-oogway.gif"
                alt="Should be an icon here"
                width={498}
                height={278}
              />
            </div>
          </div>
          <div className="flex h-1/6 flex-col items-center justify-end">
            <h1 className="text-ssm text-center font-bold text-white">Fin.</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
