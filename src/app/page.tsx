import NavBar from "./_components/NavBar";
import ArrowDown from "./_components/ArrowDown";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="h-screen bg-zinc-900">
        <div className="h-screen flex flex-col justify-between items-center">
          <div>
            <div className="h-32"></div>
            <h1 className="text-center text-4xl text-white font-bold">Mohamad Doddy Sujatmiko</h1>
          </div>
          <div>
              <img className="rounded-full" src="https://github.com/doddy-s.png" alt="Should be an icon here" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-center text-white font-bold">Scroll Down</h1>
            <ArrowDown />
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </main>
  )
}
