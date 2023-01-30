export default function NavBar() {
    return (
        <div className="fixed top-0 w-screen h-12 px-4 py-4 m-0 flex flex-row justify-between md:justify-start items-center gap-1 md:gap-4 bg-black bg-opacity-50 text-white shadow backdrop-blur-md">
            <Icon />
            <div className="flex flex-row justify-start items-center gap-4 visible">
                <Button content="HOME" route="/" logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729346497036388/home-door-svgrepo-com.svg" />
                <Button content="SKILLS" route="/skills" logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729978020806786/brain-pictogram-5-svgrepo-com.svg" />
                <Button content="HOBBIES" route="/" logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729747015311360/heart-svgrepo-com.svg" />
                <Button content="CONTACTS PERSON" route="/" logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069730258724606032/email-14-svgrepo-com.svg" />
            </div>
        </div>
    );
};

const Button = ({ content, route, logo }: any) => (
    <a href={ route }>
        <div className="flex flex-row items-center justify-center w-9 md:w-auto h-9 md:px-6 md:py-6 md:pt-2 md:pb-2 rounded-lg 
        transition ease-in-out duration-700 
        hover:bg-gray-400 hover:shadow-lg 
        hover:text-black">
            <p className="collapse md:visible">{ content }</p>
            <img className="visible md:collapse w-6 h-6 fill-white" src={ logo }/>
        </div>
    </a>
    
);

const Icon = () => (
    <div className="w-10 h-10 rounded-full">
        <img className="rounded-full" src="https://github.com/doddy-s.png" alt="Should be an icon here" />
    </div>
);