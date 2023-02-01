import Image from "next/image";

export default function GameBox({ obj }: any) {
    return (
        <div className="w-72 h-96 p-4 rounded-md flex flex-row justify-between 
        bg-black hover:bg-white
        text-white hover:text-black
        shadow-2xl drop-shadow-2xl" 
        style={{ backgroundImage: `url("${obj.poster}")`,backgroundSize: 'cover' }}>
            <div className="flex w-auto h-auto mr-8 items-center justify-center">
            </div>
            <div className="text-right">
            </div>
        </div>
    )
}