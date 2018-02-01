import React from "react";

class ShoppingList extends React.Component{
    render()
    {

        return React.createElement(
            "div",{className:"shopping-list"},
            React.createElement("h1","h1 children"),
            React.createElement("ul","u1 children")
        );
    }
}