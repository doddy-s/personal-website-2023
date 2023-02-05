import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-0 flex h-14 w-screen flex-row items-center justify-between gap-8 px-12 text-white backdrop-blur-sm md:justify-start">
      <Icon />
      <div className="visible flex flex-row items-center justify-start gap-4">
        <Button
          content="HOME"
          route="/"
          logo="https://cdn.discordapp.com/attachments/1069729310262435860/1071878407111061614/home-door-svgrepo-com.svg"
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
    <div className="flex h-9 w-9 items-center justify-center rounded-lg duration-500 ease-in-out hover:bg-white hover:text-black md:w-auto">
      <p className="hidden px-8 md:block">{content}</p>{" "}
      <Image
        id={content}
        src={logo}
        alt="logo"
        width={24}
        height={24}
        className="visible top-1/2 table-cell align-middle md:hidden"
      />
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
