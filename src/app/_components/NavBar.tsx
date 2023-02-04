import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-0 flex h-14 w-screen flex-row items-center justify-between gap-2 bg-black bg-opacity-50 px-8 py-4 text-white shadow backdrop-blur-md md:justify-start">
      <Icon />
      <div className="visible flex flex-row items-center justify-start gap-4">
        <Button
          content="HOME"
          route="/"
          logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729346497036388/home-door-svgrepo-com.svg"
        />
        <Button
          content="SKILLS"
          route="/skills"
          logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729978020806786/brain-pictogram-5-svgrepo-com.svg"
        />
        <Button
          content="HOBBIES"
          route="/hobbies"
          logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069729747015311360/heart-svgrepo-com.svg"
        />
        <Button
          content="CONTACTS PERSON"
          route="/contacts"
          logo="https://cdn.discordapp.com/attachments/1069729310262435860/1069730258724606032/email-14-svgrepo-com.svg"
        />
      </div>
    </div>
  );
}

const Button = ({ content, route, logo }: any) => (
  <a href={route}>
    <div
      className="flex h-9 w-9 flex-row items-center justify-center rounded-lg transition duration-500 ease-in-out hover:bg-white hover:text-black 
            md:w-auto md:px-6 md:py-6 md:pt-2 md:pb-2"
    >
      <p className="collapse md:visible">{content}</p>
      <div className="visible fill-white md:collapse">
        <Image src={logo} alt="logo" width={24} height={24} />
      </div>
    </div>
  </a>
);

const Icon = () => (
  <div className="h-10 w-10">
    <Image
      className="h-10 w-10 rounded-full border-2 border-white duration-1000 hover:border-green-500"
      src="https://github.com/doddy-s.png"
      alt="My face"
      width={40}
      height={40}
    />
  </div>
);
