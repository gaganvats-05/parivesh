import { useNavigate } from "react-router-dom";

const SolutionCard = ({ imgURL, heading, about }) => {
    return (
        <div
            className="flex flex-col w-[320px] mx-auto items-center justify-center h-[480px] py-4"
            style={{
                borderTopLeftRadius: "150px",
                borderTopRightRadius: "150px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
        >
            <img
                src={imgURL}
                alt=" "
                className="object-contain rounded-full w-[80%]"
                style={{ border: "4px solid rgba(22, 163, 74, 0.6)" }}
            />
            <h3 className="text-center text-green-600 text-lg font-medium my-4">
                {heading}
            </h3>
            <p className="text-slate-800 font-normal text-sm p-1 text-center">
                {about}
            </p>
        </div>
    );
};

const SolutionData = [
    {
        imgURL: "/eWaste.png",
        heading: "E-Waste Management",
        about: "Electronic waste (e-waste) is the fastest growing form of domestic waste globally, with around 150 million metric tones being produced in 2021 alone, of which only 25% was recycled.",
        category: "e-waste",
    },
    {
        imgURL: "/plasticWaste.png",
        heading: "Plastic Waste Management",
        about: "The world produced 367 million metric tons of plastic waste, a number that is set to exponentially increase in the coming years. Efforts to manage and dispose of the existing waste is crucial to address the plastic crisis.",
        category: "plastic-waste",
    },
    {
        imgURL: "/bioMedicalWaste.png",
        heading: "Bio Medical Waste Management",
        about: "0.5 kg of healthcare waste(HCW) per bed per day is produced in hospitals, while 80% of this waste is potentially harmless but the other 20% can create serious health threats to health workers and communities if not disposed of properly.",
        category: "bio-medical-waste",
    },
];

const SolutionSection = () => {
    let navigate = useNavigate();

    return (
        <div
            className="flex flex-col items-center w-full h-full max-w-7xl mx-auto p-2 mt-16 sm:mb-4 mb-2"
            id="solutions"
        >
            <h2 className="sm:text-4xl text-[1.4rem] text-center font-extrabold text-gray-800 mb-4">
                Solutions for various industries
            </h2>
            <p className="sm:text-lg text-[1rem] font-medium text-gray-600 px-4 text-center mb-4">
                We follow a procedure we've established for recycling waste and
                make sure it's followed.
            </p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-8 w-full my-10">
                {SolutionData.map((individualData, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-center flex-col"
                        >
                            <SolutionCard
                                imgURL={individualData?.imgURL}
                                heading={individualData?.heading}
                                about={individualData?.about}
                            />

                            <button
                                className="bg-black mx-auto flex items-center justify-center w-[325px] py-2 border-2 font-medium text-base cursor-pointer shadow-lg rounded-[5px] text-white my-2"
                                onClick={() =>
                                    navigate(
                                        `/scanImage?category=${individualData?.category}`
                                    )
                                }
                            >
                                classify
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SolutionSection;
