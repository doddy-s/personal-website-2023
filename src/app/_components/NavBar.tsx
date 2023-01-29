export default function NavBar() {
    return (
        <div className="fixed top-0 w-screen h-12 px-4 py-4 m-0 flex flex-row justify-start items-center gap-4 bg-black bg-opacity-50 text-white shadow backdrop-blur-md">
            <Icon />
                <div className="flex flex-row justify-start items-center gap-4 collapse md:visible">
                    <Button content="HOME" link="/" />
                    <Button content="SKILLS" link="/skills" />
                    <Button content="HOBBIES" link="/" />
                    <Button content="CONTACTS PERSON" link="/" />
                </div>
        
        </div>
    );
};

const Button = ({ content, link }: any) => (
    <a href={ link }>
        <div className="flex flex-row items-center justify-center w-auto h-9 px-6 py-6 pt-2 pb-2 rounded-lg 
        transition ease-in-out duration-700 
        hover:bg-white hover:shadow-lg 
        hover:text-black">
            { content }
        </div>
    </a>
    
);

const Icon = () => (
    <div className="w-10 h-10 rounded-full">
        <img className="rounded-full" src="https://github.com/doddy-s.png" alt="Should be an icon here" />
    </div>
);