const Card2 = ({ data }) => {
  return (
    <div
      className="w-[23rem] p-[2rem] m-[1rem] font-light text-base text-left"
      style={{
        background: "rgba(255,255,255,0.3)",
        boxShadow: "20px 20px 40px -6px rgba(0,0,0,0.5)",
        backdropFilter: "blur(1.8px)",
        // `-webkit-backdrop-filter`: "blur(1.8px)",
        borderRadius: "10px",
      }}
    >
      {data.desc}
    </div>
  );
};

export default Card2;
