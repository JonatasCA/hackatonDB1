import React from "react";
import Header from '../components/header/header.jsx'
import Categories from "../components/cards/categories.jsx";

function CategoriesPage() {

    return(
        <React.StrictMode>
        <Header />
        <Categories />
      </React.StrictMode>
    )

}

export default CategoriesPage