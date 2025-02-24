import React from 'react';


const TrendingSalad = () => {
    return (
        <div className="text-left p-5 Poppins border-2 border-gray-300 rounded-lg w-7xl mx-auto h-355px p-50px my-5" style={{ backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg')` }}
        >
            <h2 className="text-lg  text-orange-600">Trending Now</h2>
            <h1 className="text-3xl font-bold text-white my-2">Mike's famous salad</h1>
            <p className="text-xl font-bold text-white my-2">With Cheese</p>
            <p className="text-sm text-white ">By John Mike</p>
        </div>
    );
}

export default TrendingSalad;

