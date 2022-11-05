import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    return (
        <nav className="w-full h-full max-w-7xl mx-auto p-2 justify-between items-center flex sm:flex-row flex-col sm:my-4 my-2">
            <div className="flex sm:flex-row flex-col items-center justify-between gap-5 md:my-0 my-4">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt=" "
                        className="w-[80px] h-[80px]"
                    />
                </Link>

                <div className="flex flex-row items-center gap-4">
                    <a href="#aboutus" className="text-lg font-medium">
                        About Us
                    </a>

                    <a href="#solutions" className="text-lg font-medium">
                        Solutions
                    </a>

                    <a href="#process" className="text-lg font-medium">
                        Process
                    </a>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 sm:w-auto max-w-[280px] w-full">
                {user === null && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/login");
                        }}
                        className="flex items-center justify-center sm:w-24 py-2 border-2 bg-black font-medium text-white sm:text-sm text-xl cursor-pointer shadow-lg rounded-[5px] w-full"
                    >
                        Login
                    </button>
                )}
                {user && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/dashboard");
                        }}
                        className="flex items-center justify-center sm:w-24 py-2 border-2 bg-black font-medium text-white sm:text-sm text-xl cursor-pointer shadow-lg rounded-[5px] w-full"
                    >
                        Dashboard
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
