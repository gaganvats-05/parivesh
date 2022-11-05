import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getProduct } from "../api";
import DataModal from "../constants/DataModal";

const ProductOne = () => {
  const URL = import.meta.env.VITE_BACKEND_BASE || "http://localhost:5500";

  const { pid } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [typeProbability, setTypeProbability] = useState("white");

  // console.log(pid);
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProduct(pid);
        setProduct(data.singleProd);
        console.log("data.single", product);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, [pid]);

  useEffect(() => {
    if (product) {
      if (product.type === "Infected Plastic") {
        setTypeProbability("red");
      } else if (product.type === "Infected Waste") {
        setTypeProbability("yellow");
      } else if (product.type === "Glassware") {
        setTypeProbability("blue");
      } else if (product.type === "General Waste") {
        setTypeProbability("green");
      } else if (product.type === "Sharps") {
        setTypeProbability("white");
      }
    }
  }, [product]);

  return (
    <>
      {openModal === true && (
        <DataModal setOpenModal={setOpenModal} typeProb={typeProbability} />
      )}

      {product && (
        <div className="flex justify-center bg-[#070818] h-full min-h-[100vh] bg-[url('/assets/wallpaper5.jpg')] bg-cover">
          <div className="singleProduct text-white text-center p-5 w-11/12 md:max-w-md backdrop-blur-lg bg-[rgba(0,0,0,0.4)] my-auto border border-white rounded-[1rem] h-full">
            <div className="product basis-1/3"></div>
            <h1 className="heading text-4xl italic pb-4 text-[#ff8585]">
              {product.name}
            </h1>
            <img
              className="rounded-[2rem] drop-shadow-2xl object-contain max-h-[15rem] w-[100%]"
              src={product.image_url}
              alt=""
            />
            <p className="description py-4 italic text-lg text-gray-400">
              "-- {product.description}"
            </p>
            <h3 className="pb-4">Type of Waste : {product.type}</h3>
            {/* <NavLink to={`/dispose/${product.type}`}> */}
            <p
              className="text-orange-500 hover:text-blue-500 cursor-pointer font-bold"
              onClick={() => setOpenModal(true)}
            >
              Methods to dispose
            </p>
            {/* </NavLink> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductOne;
