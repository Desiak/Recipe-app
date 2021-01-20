import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Recipe from "../../components/Recipe";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();

  const { category, s, c, a } = router.query;
  console.log(router);
  const url = `https://www.themealdb.com/api/json/v1/1/${category}?${
    s ? `s=${s}` : c ? `c=${c}` : `a=${a}`
  }`;
  console.log(url);

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
  }, [category, s, c]);

  return (
    <Layout>
      <div>
        <h1>
          Results for: {c}
          {s} {a}
        </h1>
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
