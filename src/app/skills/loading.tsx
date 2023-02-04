import Image from "next/image";

export default function loading() {
  return (
    <div className="flex h-screen w-auto flex-col items-center justify-center gap-4">
      <Image
        className="h-20 w-20 animate-spin"
        src="https://cdn.discordapp.com/attachments/1069729310262435860/1069891046839963729/loading.svg"
        alt="loading"
        width={80}
        height={80}
      />
      <h1 className="text-white">Loading....</h1>
    </div>
  );
}
