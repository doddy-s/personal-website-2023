export default function SkillBox({ name, date, logo }: any) {
    return (
        <div className="w-72 h-28 p-4 m-4 rounded-md flex flex-row justify-between bg-black">
            <div className="flex w-20 h-20 mr-8 items-center justify-center">
                <img src={ logo } alt="INI LOGO" />
            </div>
            <div className="text-white text-right">
                <h1 className="text-2xl text-bold">{ name }</h1>
                <h2 className="text-sm">Since <br />{ date }</h2>
            </div>
        </div>
    );
};