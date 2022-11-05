import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import Modal from "../components/Modal";
import QRmodal from "../components/QRmodal";
import { companyProduct } from "../api";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
    const URL = import.meta.env.VITE_BACKEND_BASE || "http://localhost:5500";
    const { isAuthenticated, logout, user } = useAuth0();

    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [products, setProducts] = useState([]);
    const [qrModal, setQRModal] = useState(false);
    const [value, setValue] = useState("");
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
            };
            fetchData();
        }
    }, [email]);

    // if (!isAuthenticated) {
    //     navigate("/");
    // }

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

                    <div className="flex flex-row items-center justify-evenly flex-wrap mt-8 p-4">
                        {products.map((product) => {
                            return (
                                <div
                                    className="flex flex-wrap justify-center rounded-[1rem] overflow-hidden max-w-[200px] min-w-[150px] w-full h-full my-4"
                                    key={product._id}
                                >
                                    <div className="max-w-sm w-full">
                                        <img
                                            className="rounded-t-[1rem] max-h-[15rem] object-contain backdrop-blur-lg bg-[rgba(0,0,0,0.3)]"
                                            src={product.image_url}
                                            alt=" "
                                            height={1080}
                                            width={1920}
                                        />
                                        <div className="p-6 text-center backdrop-blue-lg transparent bg-[rgba(225,225,225,0.2)]">
                                            <h5 className="text-white text-xl font-medium mb-2">
                                                {product.name}
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
                                                        setValue(
                                                            `https://void-hacks.vercel.app/product/${product._id}`
                                                        );
                                                        setQRModal(true);
                                                    }}
                                                    type="button"
                                                    class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                                                >
                                                    View QR
                                                </button>
                                                {/* <QRCodeSVG  /> */}
                                            </div>
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
