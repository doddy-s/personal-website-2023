export default function NavBar() {
    return (
      <div className="fixed top-0 w-screen h-12 p-4 m-0 flex flex-row justify-start items-center gap-4 bg-black bg-opacity-50 text-white shadow">
        <Icon />
        <Button content="Home" />
        <Button content="Hobby" />
        <Button content="Contact" />
      </div>
    );
};

const Button = ({ content }: any) => (
    <div className="w-24 h-8 rounded-lg bg-black bg-opacity-50 text-center">
        {content}
    </div>
)

const Icon = () => (
    <div className="w-8 h-8 rounded-full">
        <img className="rounded-full" src="https://github.com/doddy-s.png" alt="Should be an icon here" />
    </div>
)