export default function NavBar() {
    return (
      <div className="fixed top-0 w-screen h-12 px-4 py-4 m-0 flex flex-row justify-start items-center gap-4 bg-black bg-opacity-50 text-white shadow">
        <Icon />
        <div className="flex flex-row justify-start items-center gap-4 collapse md:visible">
            <Button content="Home" />
            <Button content="Hobby" />
            <Button content="Contact" />
        </div>
        
      </div>
    );
};

const Button = ({ content }: any) => (
    <a href="/">
        <div className="flex flex-row items-center justify-center w-24 h-10 rounded-lg 
        transition ease-in-out duration-1000 
        hover:bg-black hover:bg-opacity-50 hover:shadow-lg">
            {content}
        </div>
    </a>
    
)

const Icon = () => (
    <div className="w-10 h-10 rounded-full">
        <img className="rounded-full" src="https://github.com/doddy-s.png" alt="Should be an icon here" />
    </div>
)