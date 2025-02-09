import React from "react"

function Header() {
    return (
      <header className="bg-white p-4">
        <nav className="flex items-center justify-between">
            <div>
                <h1 className="text-black">RecipeWebPage</h1>
            </div>
        <div>
            <input type="text" id="text" placeholder="search..." className="bg-input pl-3 p-3 text-gray-700" />
            <button className="bg-green-400 text-white p-3">Search</button> 
        </div>
            <ul className="flex items-center justify-between">
                <li className="ml-4 text-green-400"><a href="#home">Home</a></li>
                <li className="ml-4 text-black"><a href="#home">Explore</a></li>
                <li className="ml-4 text-black"><a href="#home">Help</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;