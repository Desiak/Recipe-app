import React from "react";
import Link from "next/link";
import {
  MDBListGroupItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

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
    <MDBListGroupItem
      className="hover-shadow p-0"
      style={{ cursor: "pointer" }}
    >
      <Link href={`/recipe/${props.meal.idMeal}`}>
        <MDBCard className="h-100">
          <MDBCardImage
            src={props.meal.strMealThumb}
            className="card-img-top"
            alt="recipe-image"
          ></MDBCardImage>
          <MDBCardBody className="d-flex align-items-center justify-content-center">
            <MDBCardTitle className="text-center">{recipeTitle}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </MDBListGroupItem>
  );
};

export default Recipe;
