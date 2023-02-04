import ArrowDown from "./_components/_icons/ArrowDown";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="px-8">
        {/* home-landing */}
        <div className="flex h-screen flex-col items-center">
          <div className="flex h-5/6 w-5/6 flex-row flex-wrap-reverse items-center justify-evenly">
            <div className="flex flex-col items-center justify-center gap-4 text-center text-white">
              <h1 className="text-4xl font-bold">Doddy Sujatmiko</h1>
              <h2 className="text-xl">
                Just a 19 y/o kid trying to conquer the world.
              </h2>
            </div>
            <div>
              <Image
                className="rounded-full border-4 border-white duration-1000 hover:border-green-500 md:h-96 md:w-96"
                src="https://github.com/doddy-s.png"
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

        {/* home-skills */}
        <div className="flex h-screen flex-col items-center">
          <div className="flex h-5/6 flex-col items-center justify-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold">I CAN DO WHAT I CAN DO.</h1>
            <h2 className="text-xl">
              Check out my skills{" "}
              <a href="/skills" className="text-green-500 hover:animate-pulse">
                here
              </a>
              !
            </h2>
          </div>
          <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
            <h1 className="text-ssm text-center font-bold text-white">
              Scroll Down!!
            </h1>
            <ArrowDown />
          </div>
        </div>

        {/* home-hobbies */}
        <div className="flex h-screen flex-col items-center">
          <div className="flex h-5/6 flex-col items-center justify-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold">I LOVE THESE THINGS.</h1>
            <h2 className="text-xl">
              Take a{" "}
              <a href="/hobbies" className="text-green-500 hover:animate-pulse">
                peek
              </a>{" "}
              on my hobbies!
            </h2>
          </div>
          <div className="flex h-1/6 flex-col items-center justify-end motion-safe:animate-bounce">
            <h1 className="text-ssm text-center font-bold text-white">
              Scroll Down!!
            </h1>
            <ArrowDown />
          </div>
        </div>

        {/* home-cp */}
        <div className="flex h-screen flex-col items-center">
          <div className="flex h-5/6 flex-col items-center justify-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold">FELL IN LOVE WITH ME YET?</h1>
            <h2 className="text-xl">
              Here`s how to{" "}
              <a
                href="/contacts"
                className="text-green-500 hover:animate-pulse"
              >
                contact
              </a>{" "}
              me.
            </h2>
          </div>
          <div className="flex h-1/6 flex-col items-center justify-end">
            <h1 className="text-ssm text-center font-bold text-white">Fin.</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
