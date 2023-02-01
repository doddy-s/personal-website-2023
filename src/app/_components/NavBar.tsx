import Image from "next/image";

export default function NavBar() {
    return (
        <div className="fixed top-0 w-screen h-12 px-8 m-0 flex flex-row justify-between md:justify-start items-center gap-1 md:gap-4 bg-black bg-opacity-50 text-white shadow backdrop-blur-md">
            <Icon />
            <div className="flex flex-row justify-start items-center gap-4 visible">
                <Button content="HOME" route="/" logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729346497036388/home-door-svgrepo-com.svg" />
                <Button content="SKILLS" route="/skills" logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729978020806786/brain-pictogram-5-svgrepo-com.svg" />
                <Button content="HOBBIES" route="/hobbies" logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729747015311360/heart-svgrepo-com.svg" />
                <Button content="CONTACTS PERSON" route="/contacts" logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069730258724606032/email-14-svgrepo-com.svg" />
            </div>
        </div>
    );
};

const Button = ({ content, route, logo }: any) => (
    <a href={ route }>
        <div className="flex flex-row items-center justify-center w-9 md:w-auto h-9 md:px-6 md:py-6 md:pt-2 md:pb-2 rounded-lg 
        transition ease-in-out duration-500 
        hover:bg-white
        hover:text-black">
            <p className="collapse md:visible">{ content }</p>
            <div className="visible md:collapse fill-white">
                <Image src={ logo } alt="logo" width={24} height={24}/>
            </div>
        </div>
    </a>
    
);

const Icon = () => (
    <div className="w-10 h-10">
        <Image className="w-10 h-10 rounded-full border-2 border-white hover:border-green-500 duration-1000" 
        src="https://github.com/doddy-s.png" alt="My face" width={40} height={40}/>
    </div>
);