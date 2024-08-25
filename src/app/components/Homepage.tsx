export default function Homepage(){
    return(
        <div className="bg-[#FFFFFF] flex flex-row items-center justify-center h-96">
            <div className="mr-8">
                <h1 className="text-9xl font-bold">
                    <span className="text-[#F2B734]">STAR</span>
                    DEE
                </h1>
                <p className="text-3xl font-bold text-right drop-shadow-lg">BRINGS YOUR STUDY TO THE STARS.</p>
            </div>
            <img
                src="./image/logo.svg"
                alt="stardee's logo."
                className="h-60"
            />
        </div>
    )
}