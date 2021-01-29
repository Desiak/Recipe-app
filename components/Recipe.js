import React from "react";
import Link from "next/link";
import Image from "next/image";

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
          <Image
            src={props.meal.strMealThumb}
            alt="recipe-thumbnail"
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
          ></Image>
          <MDBCardBody className="d-flex align-items-center justify-content-center">
            <MDBCardTitle className="text-center">{recipeTitle}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </MDBListGroupItem>
  );
};

export default Recipe;
