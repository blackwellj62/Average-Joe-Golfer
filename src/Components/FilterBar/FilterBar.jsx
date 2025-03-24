import { useEffect, useState } from "react";
import { getCategories } from "../../Services/Categories.jsx";
import "./FilterBar.css"

export const FilterBar = ({setSearchTerm,setChosenCategory}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categoryArray) => {
          setCategories(categoryArray);
        });
      }, []);
      

    
     
      return (
        <div className="filter-bar">
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            placeholder="Search Posts"
            className="post-search"
          />
          <select
            onChange={(event) => {
              setChosenCategory(event.target.value);
            }}
            className="category-filter"
          >
            <option className="category-option" key="0">
              Choose a Category
            </option>
            {categories.map((category) => {
              return (
                <option className="category-option" key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
      );
}

