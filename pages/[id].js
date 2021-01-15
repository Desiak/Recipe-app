import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FullRecipe() {
  const router = useRouter();
  const { id } = router.query;
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [meal, setMeal] = useState(null);
  let ingredients = [];
  let ingredientsMeasures = [];
  let instruction = [];
  let youTubeEmbed = "";
  let mealTags = [];
  const getData = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setMeal(res.meals[0]);
  };

  useEffect(() => {
    getData();
  }, []);
  if (meal) {
    for (const key in meal) {
      if (key.includes("Ingredient")) {
        if (meal[key] !== "" && meal[key] !== null) {
          ingredients.push(meal[key]);
        }
      } else if (key.includes("Measure")) {
        if (meal[key] !== "" && meal[key] !== null) {
          ingredientsMeasures.push(meal[key]);
        }
      }
    }
    console.log(meal.strTags);
    youTubeEmbed = meal.strYoutube.replace("watch?v=", "embed/");
    instruction = meal.strInstructions.split("\r\n");
    mealTags = meal.strTags ? meal.strTags.split(",") : [];

    return (
      <Layout>
        <div class="container">
          <div class="row justify-content-center text-center">
            <img
              src={meal.strMealThumb}
              alt="meal image"
              height="300px"
              style={{ objectFit: "cover", width: "80%" }}
              class="mb-4"
            ></img>
            <h1>{meal.strMeal}</h1>
            {mealTags.map((tag) => (
              <span
                className="badge bg-warning m-2 py-2"
                style={{ display: "inline", width: "100px" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div class="row my-3 align-items-center">
            <div class="col-md-4">
              <h2 class="mb-5 text-center">Ingredients table</h2>
              <table class="table table-striped table-hover text-center table-light">
                <thead class="table-dark">
                  <tr>
                    <th scope="col" class="text-start">
                      #
                    </th>
                    <th scope="col">Ingredient</th>
                    <th scope="col" class="text-end">
                      Measure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients.map((ingr, index) => {
                    return (
                      <tr key={ingr + index}>
                        <th scope="row" class="text-start">
                          {index + 1}
                        </th>
                        <td>{ingr}</td>
                        <td class="text-end">{ingredientsMeasures[index]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6">
              <h2 class="mb-5 text-center">Preparation</h2>
              <ul class="list-group list-group-flush">
                {instruction.map((step, index) => {
                  if (step !== "") {
                    return (
                      <li class="step list-group-item">
                        <p>Step {index + 1}</p>
                        <p>{step}</p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
          <div class="row d-flex justify-content-center py-5">
            <div class="col-md-6">
              <h2 class="text-center py-4">
                You may also like this video tutorial!
              </h2>
              <div class="ratio ratio-16x9">
                <iframe
                  src={youTubeEmbed}
                  title="YouTube tutorial"
                  allowfullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return <div></div>;
  }
}
