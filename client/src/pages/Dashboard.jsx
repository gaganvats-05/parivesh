import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import Modal from "../components/Modal";
import QRmodal from "../components/QRmodal";
import { companyProduct } from "../api";
import { useAuth0 } from "@auth0/auth0-react";
import "./Dashboard.css";

const Dashboard = () => {
    const URL = import.meta.env.VITE_BACKEND_BASE || "http://localhost:5500";
    const { isAuthenticated, logout, user } = useAuth0();

    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [products, setProducts] = useState([]);
    const [qrModal, setQRModal] = useState(false);
    const [value, setValue] = useState("");
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            localStorage.clear();
            const logoutUser = () => {
                logout({ returnTo: window.location.origin });
            };
            logoutUser();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            console.log("user", user);
            setEmail(user.email);
        }
    }, [user]);

    useEffect(() => {
        if (email.length !== 0) {
            const fetchData = async () => {
                const { data } = await companyProduct(email);
                setProducts(data.products);
                setProductList(data.products);
            };
            fetchData();
        }
    }, [email]);

    if (!isAuthenticated) {
        navigate("/");
    }

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();

        if (value.length === 0) {
            setProducts(productList);
            return;
        }
        let result = [];
        result = products.filter((data) => {
            return data.name.search(value) !== -1;
        });
        setProducts(result);
    };

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal((prev) => !prev)} />
            )}

            {qrModal === true && (
                <QRmodal setOpenModal={setQRModal} value={value} />
            )}
            <div className="relative bg-[#F9F9F9] h-full w-full min-h-screen">
                <div className="absolute flex items-center justify-end w-full h-full p-4 pb-0">
                    <img
                        src="/logo.png"
                        height="300px"
                        width="300px"
                        className="mx-auto opacity-10 pt-8"
                    />
                </div>

                <nav className="nav flex justify-between items-center px-4 backdrop-blur-lg p-4 pb-0">
                    <div className="flex flex-[0.5] justify-start w-full">
                        <img
                            src="/logo.png"
                            alt="icon"
                            className="w-[4rem] h-[4rem] cursor-pointer"
                            onClick={() => navigate("/")}
                        />
                    </div>
                    <div className="flex flex-[0.5] flex-row justify-end space-x-3">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={() => navigate("/training")}
                            className="flex items-center justify-center w-24 py-2 border-none bg-black font-medium text-white text-sm cursor-pointer shadow-lg rounded-[5px] active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Training
                        </button>
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={handleSignOut}
                            className="flex items-center justify-center w-24 py-2 border-none bg-black font-medium text-white text-sm cursor-pointer shadow-lg rounded-[5px] active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Logout
                        </button>
                    </div>
                </nav>
                <div className="flex flex-col w-full h-full">
                    <h1 className="heading text-center font-semibold md:text-5xl sm:text-4xl text-3xl text-slate-800">
                        Products
                    </h1>

                    <div className="flex flex-col items-center justify-center z-50 p-2">
                        <input
                            type="text"
                            onChange={(event) => handleSearch(event)}
                            // className="box"
                            className="flex max-w-sm w-full mx-auto p-2 border-2 rounded-md mb-4 mt-2 bg-[#f5f5f5] outline-slate-400"
                            placeholder="Search.."
                        />
                        <button
                            className="bg-black text-white py-[0.4rem] px-2 rounded-sm w-[100px] cursor-pointer"
                            onClick={() => setShowModal((prev) => !prev)}
                        >
                            Add
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 z-10 w-full h-full max-w-7xl mx-auto p-2 my-8">
                        {products?.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col mx-auto max-w-[300px] w-full min-h-[300px] h-full col-span-1 bg-[#f5f5f5] rounded-2xl"
                                    style={{
                                        boxShadow:
                                            "rgba(149, 157, 165, 0.4) 0px 8px 24px",
                                    }}
                                >
                                    <img
                                        src={product?.image_url}
                                        alt=" "
                                        className="object-cover h-[250px] w-full"
                                        style={{
                                            borderTopLeftRadius: "16px",
                                            borderTopRightRadius: "16px",
                                        }}
                                    />

                                    <div className="px-6 py-3 text-center backdrop-blue-lg transparent bg-[rgba(225,225,225,0.2)]">
                                        <h5 className="text-black text-xl font-medium mb-2">
                                            {product?.name}
                                        </h5>
                                        <div className="ctas w-full flex justify-evenly">
                                            <NavLink
                                                to={`/product/${product._id}`}
                                                className=""
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                >
                                                    View
                                                </button>
                                            </NavLink>
                                            <button
                                                onClick={() => {
                                                    setValue();
                                                    `https://parivesh.vercel.app/product/${product._id}`;
                                                    setQRModal(true);
                                                }}
                                                type="button"
                                                className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer"
                                            >
                                                View QR
                                            </button>
                                            {/* <QRCodeSVG  /> */}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
