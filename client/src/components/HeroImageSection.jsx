const HeroImageSection = () => {
    return (
        <div className="flex flex-row items-center w-full h-full max-w-7xl mx-auto p-2">
            <div className="relative flex lg:flex-row flex-col items-center justify-center w-full h-full p-4 lg:space-x-4 space-x-0 lg:space-y-0 space-y-4">
                <img
                    src="/heroImageCenter.png"
                    alt=" "
                    className="absolute m-auto sm:h-[120px] h-[80px] sm:w-[120px] w-[80px] bg-white sm:p-3 p-2 rounded-full"
                />
                <img
                    src="/heroImage1.png"
                    alt=" "
                    width={1920}
                    height={1080}
                    className="object-cover lg:w-[50%] w-[100%] lg:h-auto h-[300px] rounded-lg"
                />
                <img
                    src="/heroImage2.png"
                    alt=" "
                    width={1920}
                    height={1080}
                    className="object-cover lg:w-[50%] w-[100%] lg:h-auto h-[300px] rounded-lg"
                />
            </div>
        </div>
    );
};

export default HeroImageSection;
