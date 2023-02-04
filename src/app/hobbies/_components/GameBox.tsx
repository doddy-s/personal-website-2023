import Image from "next/image";

export default function GameBox({ obj }: any) {
  return (
    <div
      className="flex h-36 w-72 flex-row justify-between rounded-md bg-black
            p-4 text-white
            shadow-2xl drop-shadow-2xl hover:bg-white hover:text-black sm:h-96"
      style={{
        backgroundImage: `url("${obj.poster}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="mr-8 flex h-auto w-auto items-center justify-center"></div>
      <div className="text-right"></div>
    </div>
  );
}
