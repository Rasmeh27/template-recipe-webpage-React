import React from "react";

/* Para reutilizar un componente de manera eficiente en react, se crea primero
este componente para que sea dinamico mediantes props. Y luego se importaria el 
hijo al componente padre. {menuList}*/

const CardsMenu = ({text, bgColor}) => {
  return (
    <div className={`w-[235px] h-[86px] ${bgColor} shadow-md rounded-xl flex items-center justify-center ml-4`}>
      <p className="text-white-700">{text}</p>
    </div>
  );
};

export default CardsMenu;