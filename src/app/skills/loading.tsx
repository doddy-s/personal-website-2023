import Image from "next/image"

export default function loading() {
    return (
        <div className="w-auto h-screen flex flex-col justify-center items-center gap-4">
            <Image className="animate-spin w-20 h-20" src="https://cdn.discordapp.com/attachments/1069729310262435860/1069891046839963729/loading.svg" alt="loading" 
            width={80} height={80} />
            <h1 className="text-white">Loading....</h1>
        </div>
    )
}