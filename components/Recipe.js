import React from "react";
import Link from "next/link";
const Recipe = (props) => {
  const recipeTitle = props.meal.strMeal;
  let ingredients = [];
  let ingrMeasures = [];
  for (const ingredient in props.meal) {
    if (ingredient.includes("Ingredient")) {
      if (props.meal[ingredient] !== "") {
        ingredients.push(props.meal[ingredient]);
      }
    } else if (ingredient.includes("Measure")) {
      ingrMeasures.push(props.meal[ingredient]);
    }
  }
  const cuisine =
    props.meal.strArea !== undefined ? `Cuisine: ${props.meal.strArea}` : "";
  return (
    <li className="card">
      <div className="card-img">
        <img
          src={props.meal.strMealThumb}
          className="card-img-top"
          alt="recipe-image"
        ></img>
      </div>
      <div className="card-body">
        <p className="recipe-cuisine">{cuisine}</p>
        <h5 className="recipe-name">{recipeTitle}</h5>
        <button className="btn btn-primary">
          <Link href={`${props.meal.idMeal}`}>
            <span>Zobacz</span>
          </Link>
        </button>
      </div>
    </li>
  );
};

export default Recipe;
