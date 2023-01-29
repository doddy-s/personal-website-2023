export default function SkillBox({ logo, name, year }: any) {
    return (
        <div className="w-60 h-28 p-4 m-4 rounded-md flex flex-row justify-between bg-black">
            <div className="flex w-20 h-20 items-center justify-center">
                {logo}
            </div>
            <div className="text-white text-right">
                <h1>{ name }</h1>
                <h2>{ year } years</h2>
            </div>
        </div>
    );
};