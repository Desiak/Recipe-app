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

  return (
    <Link href={`/recipe/${props.meal.idMeal}`}>
      <li className="card hover-shadow" style={{ cursor: "pointer" }}>
        <div className="card-img">
          <img
            src={props.meal.strMealThumb}
            className="card-img-top"
            alt="recipe-image"
          ></img>
        </div>
        <div className="card-body d-flex align-items-center justify-content-center">
          <h5 className="recipe-name text-center m-0">{recipeTitle}</h5>
        </div>
      </li>
    </Link>
  );
};

export default Recipe;
