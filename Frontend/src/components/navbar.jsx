import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authcontext";
import { useLocation } from "react-router-dom";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const buttonList = [
        { id: 0, name: "Recipes", href: "/recipe" },
        { id: 1, name: "Meals", href: "/dietchart" },
        { id: 2, name: "Workout", href: "/workoutvideo" },
        { id: 3, name: "Yoga & Meditation", href: "/yoga" },
        { id: 4, name: "Progress", href: "/dashboard" },
        { id: 5, name: "Shop", href: "/shop" },
        { id: 6, name: "Blog", href: "/blog" },
        { id: 7, name: "Map", href: "/gymmap" },
    ];

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="/" className="text-2xl font-bold text-teal-600 dark:text-teal-300">
                            FitFusion
                        </a>
                        {/* Mobile Toggle */}
                        <button
                            className="block md:hidden p-2 text-gray-600 dark:text-white"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Links (Desktop) */}
                    <nav className="hidden md:flex md:items-center md:gap-6">
                        {buttonList.map((button) => (
                            <a
                                key={button.id}
                                href={button.href}
                                className={`text-sm transition ${
                                    isActive(button.href)
                                        ? "text-teal-600 dark:text-teal-300 font-semibold"
                                        : "text-gray-500 dark:text-white hover:text-teal-500"
                                }`}
                            >
                                {button.name}
                            </a>
                        ))}
                    </nav>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <>
                                <span className="text-gray-700 dark:text-white">
                                    Hi, {user.username}
                                </span>
                                <button
                                    className="rounded bg-teal-600 px-5 py-2 text-sm font-medium text-white hover:bg-teal-700"
                                    onClick={logout}
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    className="rounded bg-teal-600 px-5 py-2 text-sm font-medium text-white hover:bg-teal-700"
                                >
                                    Login
                                </a>
                                <a
                                    href="/createaccount"
                                    className="rounded bg-gray-100 px-5 py-2 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white hover:text-teal-500"
                                >
                                    Register
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-3">
                    {buttonList.map((button) => (
                        <a
                            key={button.id}
                            href={button.href}
                            className={`block text-sm ${
                                isActive(button.href)
                                    ? "text-teal-600 dark:text-teal-300 font-semibold"
                                    : "text-gray-700 dark:text-white hover:text-teal-500"
                            }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {button.name}
                        </a>
                    ))}

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        {user ? (
                            <div className="space-y-2">
                                <span className="block text-gray-700 dark:text-white">
                                    Hi, {user.username}
                                </span>
                                <button
                                    onClick={() => {
                                        logout();
                                        setMenuOpen(false);
                                    }}
                                    className="w-full rounded bg-teal-600 px-4 py-2 text-white text-sm font-medium"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <a
                                    href="/login"
                                    className="block rounded bg-teal-600 px-4 py-2 text-white text-sm text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </a>
                                <a
                                    href="/createaccount"
                                    className="block rounded bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm text-teal-600 dark:text-white text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Register
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
