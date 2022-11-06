import React from "react";
import Card2 from "../components/Card2";
import wallpaper7 from "../../public/assets/wallpaper7.png";

const dummyData = [
  {
    id: 1,
    desc: "Know the healthcare waste laws. Healthcare waste is regulated by the DOT, EPA, OSHA, and the DEA. It’s vital to be aware of all guidelines from each agency when preparing, transferring, and disposing of hazardous waste.",
  },
  {
    id: 2,
    desc: "Classify medical waste correctly. Identifying the kind of waste you’re dealing with is the first step in properly disposing of it. Avoid putting non-hazardous waste in with the rest to prevent overspending.",
  },
  {
    id: 3,
    desc: "Separate the waste by type. Waste should be separated out into the different categories, including sharps, pharmaceutical, chemical, pathological, and non-hazardous.",
  },
  {
    id: 4,
    desc: "Regulated medical waste goes in red bags. Sharps that go into these bags must be put into puncture-proof containers first.",
  },
  {
    id: 5,
    desc: "Use the right medical waste containers. Put all waste in approved containers depending on how it’s classified. Some waste can go in certified cardboard boxes, while other waste gets put in special tubs or even locked up for transit.",
  },
  {
    id: 6,
    desc: "Prepare the containers properly. Healthcare waste containers and bags must be taped for shipment, then packaged according to DOT weight restrictions.",
  },
  {
    id: 7,
    desc: "Containers should be stored in a secure, dry area before pickup or shipping. It’s essential to properly label all waste before transport as well.",
  },
  {
    id: 8,
    desc: "Include the right documentation. Proper documentation of healthcare waste is crucial to protect both the provider and the waste disposal company. The right paperwork should accompany each container and bag throughout the process.",
  },
  {
    id: 9,
    desc: "Use the medical waste disposal color code. The color coding system for waste segregation calls for all sharps to go in puncture resistant red biohazard waste containers. Biohazard waste goes in red bags and containers.",
  },
  {
    id: 10,
    desc: "Yellow containers are for trace chemo waste, while pharmaceutical waste goes into black containers for hazardous materials and blue for all others. Radioactive wastes like Fluorine-18 or Iodine-131 get put in shielded containers marked with the radioactive symbol.",
  },
  {
    id: 11,
    desc: "Hire the right waste disposal company. Multiple regulating bodies, various hazards, and several different kinds of waste present a daunting challenge for healthcare.",
  },
];

const Training = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${wallpaper7})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="w-full text-center text-3xl font-bold font-sans px-[3rem] py-[2rem]">
        Best Practices for Medical Waste Handling
      </h1>
      <p className="w-full text-center text-1xl text-opacity-10 font-semibold px-[3rem] pb-[1rem] font-sans">
        Healthcare workers can avoid most medical waste problems by adhering to
        a few key best practices. Employees should know the laws, then classify
        and separate all waste by type into the correct, color-coded waste
        containers. Waste should be labeled depending on its category, and the
        right documentation should accompany all containers during transit. A
        dependable medical waste disposal company can help a facility put these
        best practices to work.
      </p>
      <div className="w-full h-full text-black flex flex-wrap justify-evenly">
        {dummyData.map((data) => (
          <Card2 key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Training;
