import ArrowDown from "./_components/_icons/ArrowDown";

export default function Page() {
  return (
    <main>
      <div>

        {/* home-landing */}
        <div className="h-screen flex flex-col items-center">
          <div className="h-5/6 w-5/6 flex flex-row flex-wrap-reverse justify-evenly items-center">
            <div className="flex flex-col justify-center items-center gap-4 text-center text-white">
              <h1 className="text-4xl font-bold">Doddy Sujatmiko</h1>
              <h2 className="text-xl">Just a 19 y/o kid trying to conquer the world.</h2>
            </div>
            <div>
                <img className="rounded-full border-8 border-white hover:border-green-500 duration-1000" src="https://github.com/doddy-s.png" alt="Should be an icon here" />
            </div>
          </div>
          <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
            <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
            <ArrowDown />
          </div>
        </div>

        {/* home-skills */}
        <div className="h-screen flex flex-col items-center">
          <div className="h-5/6 flex flex-col justify-center items-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold">I CAN DO WHAT I CAN DO.</h1>
            <h2 className="text-xl">Check out my skills <a href="/skills" className="text-green-500 hover:animate-pulse">here</a>!</h2>
          </div>
          <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
            <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
            <ArrowDown />
          </div>
        </div>

        {/* home-hobbies */}
        <div className="h-screen flex flex-col items-center">
          <div className="h-5/6 flex flex-col justify-center items-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold">I LOVE THESE THINGS.</h1>
            <h2 className="text-xl">Take a <a href="/hobbies" className="text-green-500 hover:animate-pulse">peek</a> on my hobbies!</h2>
          </div>
          <div className="h-1/6 flex flex-col justify-end items-center motion-safe:animate-bounce">
            <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
            <ArrowDown />
          </div>
        </div>
        

        {/* home-cp */}
        <div className="h-screen flex flex-col items-center">
          <div className="h-5/6 flex flex-col justify-center items-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold">FELL IN LOVE WITH ME YET?</h1>
            <h2 className="text-xl">Here`s how to <a href="/contacts" className="text-green-500 hover:animate-pulse">contact</a> me.</h2>
          </div>
          <div className="h-1/6 flex flex-col justify-end items-center">
            <h1 className="text-center text-ssm text-white font-bold">Fin.</h1>
          </div>
        </div>
        
      </div>
    </main>
  );
};
