export default function loading() {
    return (
        <div className="w-auto h-screen flex flex-col justify-center items-center gap-4">
            <img className="animate-spin w-24 h-24" src="https://cdn.discordapp.com/attachments/1069729310262435860/1069891046839963729/loading.svg" alt="loading" />
            <h1 className="text-white">Loading....</h1>
        </div>
    )
}