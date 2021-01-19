import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Recipe from "../../components/Recipe";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();

  const { category } = router.query;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  let [results, setResults] = useState([]);

  const getData = async () => {
    const data = await fetch(url);
    const res = await data.json();

    const allRecipes = res.meals;

    if (allRecipes) {
      setResults(
        allRecipes.map((recipe) => {
          return <Recipe key={recipe.idMeal} meal={recipe}></Recipe>;
        })
      );
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <Layout>
      <div>
        <h1 style={{ textTransform: "capitalize" }}>{category}</h1>
        <ul
          style={{
            display: "grid",
            gridGap: "50px",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            padding: "5%",
            margin: "0",
          }}
        >
          {results}
        </ul>
      </div>
    </Layout>
  );
};

export default Category;
