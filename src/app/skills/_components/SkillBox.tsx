export default function SkillBox({ obj }: any) {
    return (
        <a href={ obj.hyperlink } target="_blank">
            <div className="w-72 h-28 p-4 m-4 rounded-md flex flex-row justify-between 
            bg-black hover:bg-white hover:backdrop-blur-sm hover:scale-110 duration-200 
            text-white hover:text-black
            shadow-2xl">
                <div className="flex w-20 h-20 mr-8 items-center justify-center">
                    <img src={ obj.logo } alt="INI LOGO" />
                </div>
                <div className="text-right">
                    <h1 className="text-2xl text-bold">{ obj.name }</h1>
                    <h2 className="text-sm">Since <br />{ obj.learning_since }</h2>
                </div>
            </div>
        </a>
        
    );
};