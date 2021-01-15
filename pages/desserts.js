import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Recipe from "../components/Recipe";

const Desserts = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
  let [results, setResults] = useState([]);

  const getData = async () => {
    const data = await fetch(url);
    const res = await data.json();
    const allRecipes = res.meals;
    setResults(
      allRecipes.map((recipe) => {
        return <Recipe key={recipe.idMeal} meal={recipe}></Recipe>;
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <div>
        <h1>Desserts</h1>
        <ul
          style={{
            display: "grid",
            gridGap: "50px",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            padding: "5%",
          }}
        >
          {results}
        </ul>
      </div>
    </Layout>
  );
};

export default Desserts;
