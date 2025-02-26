import React from "react";
import CardsMenu from "./cardsMenu";

/* Para reutilizar un componente de manera eficiente en react, se crea primero
el componente que se va a reutilizar {cardsMenu}*/
/* Luego se importa el componente hijo al componente padre {menuList} */
/* Y se crean los datos que se van a utilizar en el componente padre */

const  menuItems = [
    {text: "Recipes & Menus >", bgColor: "bg-orange-500"},
    {text: "Share your recipe >", bgColor: "bg-lime-500"},
    {text: "Custom meal plan >", bgColor: "bg-yellow-500"},
    {text: "Create grocery list >", bgColor: "bg-orange-400"},
    {text: "Cooking Tips & Tricks >", bgColor: "bg-lime-600"},
];

const menuList = () => {
    return (
        <div className="flex justify-center mt-10 ">
            {menuItems.map((item, index) => (
                <CardsMenu key={index} text={item.text} bgColor={item.bgColor} />
            ))}
        </div>
    );
};

export default menuList;
