import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { login } from "../api";
import { setAuth } from "../store/authSlice";

import AlertPopUp from "../components/AlertPopUp";

const Login = () => {
    const [value, setValue] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const [showAlert, setShowAlert] = useState(false);

    const handleSignin = async (e) => {
        e.preventDefault();

        if (!value.email || !value.password) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
            return;
        }

        try {
            // const { data } = await login(value);
            console.log(data);
            dispatch(setAuth(data));
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (user !== null) {
            navigate("/dashboard");
        }
    }, [user]);

    return (
        <div>
            {showAlert && <AlertPopUp message="Please enter all fields" />}
            {user === null && (
                <div className="text-white flex flex-col justify-start items-center bg-[#f5f5f5] h-screen px-4">
                    <nav className="w-full max-w-7xl mx-auto p-2 justify-between items-center flex md:flex-row flex-col md:my-4 my-2">
                        <div className="flex items-center justify-center">
                            <Link to="/">
                                <img
                                    src="/logo.png"
                                    alt=" "
                                    className="w-[80px] h-[80px]"
                                />
                            </Link>
                        </div>
                    </nav>

                    <div
                        className="max-w-[550px] flex flex-col justify-between items-center w-full h-auto min-h-[400px] sm:p-8 p-4 space-y-4 bg-[rgba(255,255,255,0.5)] rounded-xl"
                        style={{
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        }}
                    >
                        <h2 className="text-center font-bold text-3xl text-slate-800">
                            Welcome Back!
                        </h2>
                        <p className="text-center font-medium text-slate-900 text-opacity-90 px-[1rem]">
                            To keep connected with us please login with your
                            email
                        </p>
                        <form className="w-full flex flex-col h-auto items-center justify-center space-y-3">
                            <input
                                required
                                placeholder="Email"
                                className="bg-[#f5f5f5] text-slate-800 border-2 border-slate-100 py-[8px] px-[15px] w-full outline-none rounded-lg"
                                type="email"
                                value={value.email}
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <input
                                required
                                placeholder="Password"
                                className="bg-[#f5f5f5] text-slate-800 border-2 border-slate-100 py-[8px] px-[15px] w-full outline-none rounded-lg"
                                type="password"
                                value={value.password}
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <div className="w-full flex flex-row justify-center">
                                <button
                                    onClick={handleSignin}
                                    className="flex items-center justify-center py-2 border-2 bg-black hover:bg-slate-800 font-medium text-white sm:text-lg text-base cursor-pointer shadow-lg rounded-[5px] w-full transition-all duration-150 ease-in-out"
                                >
                                    LogIn
                                </button>
                            </div>
                        </form>
                        <div className="w-full flex flex-row items-center justify-center space-x-1">
                            <span className="text-center text-slate-600 font-medium">
                                Don't have an account?
                            </span>
                            <button
                                className="text-slate-900 hover:underline font-semibold cursor-pointer underline-offset-2 transition-all duration-150 ease-in-out"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/signup");
                                }}
                            >
                                signup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
