import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = [
        { label: "World", path: "/world" },
        { label: "Politics", path: "/politics" },
        { label: "Business", path: "/business" },
        { label: "Science & Technology", path: "/technology-science" },
        { label: "Sports", path: "/sports" },
        { label: "Culture & Entertainment", path: "/culture-entertainment" },
    ];

    return (
        <header className="border-b border-black/10 bg-[#111111]">
            
            {/*Brand*/}
            <div className="border-b border-black/10 px-6 py-9 text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-red-300">
                    Global News . Stories . Insight
                </p>

                <h1 className="mt-3 text-4xl font-black tracking-[-0.02em] md:text-6xl">
                    THE BINOCULARS
                </h1>
            </div>

            {/*Navigation*/}
            <nav className="border-t border-black/10">
                <div className="mx-auto flex items-center justify-center gap-6 overflow-x-auto px-6 py-4">
                    
                    <NavLink 
                        to="/"
                        className={({ isActive }) => `shrink-0 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            isActive ? "text-white" : "text-gray-500 hover:text-white"
                            }`
                        }>
                            Home
                    </NavLink>

                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `shrink-0 text-xs font-medium uppercase tracking-wider transition-colors ${
                                isActive ? "text-black" : "text-gray-400 hover:text-white"
                            }`
                        }>
                                {link.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;