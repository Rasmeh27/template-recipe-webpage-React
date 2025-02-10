import React from "react"
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";

/*Learning React Js and TailwindCSS: This is a component for to watch the header with his options */
function Header() {
    return (
        <header className="bg-white p-4 shadow-md">
            <nav className="flex items-center justify-between">
                {/* Logo y menú */}
                <div className="flex items-center justify-between">
                <FaBars className="text-gray-700 text-2xl mr-3 cursor-pointer" />  
                    <h1 className="text-black text-xl font-bold">Logo-RecipeWebPage</h1>
                </div>
                {/* Search */}
                <div className="flex items-center border-gray-300 rounded-lg overflow-hidden">
                    <select className="bg-gray-100 p-3 border-gray-300 text-sm text-black outline-none cursor-pointer" id="category">
                        <option>All Categories</option>
                    </select>
                    <input type="text" id="text" placeholder="search..." className="bg-gray-100 p-2 text-gray-700 outline-none"/>
                    <button className="bg-green-500 p-3 px-3 text-white cursor-pointer"><FaSearch></FaSearch></button>
                </div>
                <ul className="flex items-center justify-between">
                    <li className="ml-4 text-green-400"><a href="#home">Home</a></li>
                    <li className="ml-4 text-black"><a href="#explore">Explore</a></li>
                    <li className="ml-4 text-black"><a href="#help">Help</a></li>
                    <li><FaUserCircle className="ml-4 text-green-500 text-3xl cursor-pointer"></FaUserCircle></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;