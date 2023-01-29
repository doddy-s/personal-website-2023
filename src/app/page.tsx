import ArrowDown from "./_components/_icons/ArrowDown";

export default function Home() {
  return (
    <main>
      <div className="bg-zinc-900">

        {/* home-landing */}
        <div className="h-screen flex flex-col items-center">
          <div className="h-5/6 w-5/6 flex flex-row flex-wrap-reverse justify-evenly items-center">
            <div className="flex flex-col justify-center items-center text-center text-white">
              <h1 className="text-4xl font-bold">Doddy Sujatmiko</h1>
              <h2 className="text-xl">Just a 19 y/o kid trying to conquer the world.</h2>
            </div>
            <div>
                <img className="rounded-full" src="https://github.com/doddy-s.png" alt="Should be an icon here" />
            </div>
          </div>
          <div className="h-1/6 flex flex-col justify-end items-center">
            <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
            <ArrowDown />
          </div>
        </div>

        {/* home-skills */}
        <div className="h-screen flex flex-col items-center">
          <div className="h-5/6 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl font-bold">I CAN DO WHAT I CAN DO.</h1>
            <h2 className="text-xl">Check out my skills here!</h2>
          </div>
          <div className="h-1/6 flex flex-col justify-end items-center">
            <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
            <ArrowDown />
          </div>
        </div>

        {/* home-hobbies */}
        <div className="h-screen flex flex-col items-center">
          <div className="h-5/6 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl font-bold">I LOVE THESE THINGS.</h1>
            <h2 className="text-xl">Take a peek on it!</h2>
          </div>
          <div className="h-1/6 flex flex-col justify-end items-center">
            <h1 className="text-center text-ssm text-white font-bold">Scroll Down!!</h1>
            <ArrowDown />
          </div>
        </div>
        

        {/* home-cp */}
        <div className="h-screen flex flex-col items-center">
          <div className="h-5/6 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl font-bold">FALL IN LOVE WITH ME YET?</h1>
            <h2 className="text-xl">Here’s my number. Wait!, I meant my contacts.</h2>
          </div>
          <div className="h-1/6 flex flex-col justify-end items-center">
            <h1 className="text-center text-ssm text-white font-bold">Finn</h1>
          </div>
        </div>
        
      </div>
    </main>
  );
};
