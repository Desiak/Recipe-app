import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";
import Recipe from "../../../components/Recipe";
import { useRouter } from "next/router";
import Link from "next/link";

const Page = () => {
  const router = useRouter();

  const { f, category, page, crit } = router.query;
  const pageNum = parseInt(page);
  // let totalNumberOfPages;
  const url = `https://www.themealdb.com/api/json/v1/1/${f}?${crit}=${category}`;

  console.log(url);
  const [results, setResults] = useState([]);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
  const [recipesTotal, setRecipesTotal] = useState(0);

  let allRecipesNumber;
  const getData = async () => {
    const data = await fetch(url);
    const res = await data.json();

    const allRecipes = res.meals;

    if (allRecipes) {
      setRecipesTotal(allRecipes.length);
      setTotalNumberOfPages(
        Math.floor(allRecipes.length / 12) +
          (allRecipes.length % 12 === 0 ? 0 : 1)
      );
      let displayedRecipes = [];
      if (allRecipes.length > 12) {
        const spliceIndex = 12 * (page - 1);
        displayedRecipes = allRecipes.splice(spliceIndex, 12);
      } else {
        displayedRecipes = allRecipes;
      }
      setResults(
        displayedRecipes.map((recipe) => {
          return <Recipe key={recipe.idMeal} meal={recipe}></Recipe>;
        })
      );
    }
  };

  useEffect(() => {
    getData();
  }, [f, category, page]);

  const generatePaginationNav = () => {
    let pageLinks = [];
    for (let i = 1; i < totalNumberOfPages + 1; i++) {
      pageLinks.push(
        <li className={`page-item ${i === pageNum ? "active" : null}`}>
          <Link href={`/site/${category}/${i}?f=${f}&&crit=${crit}`}>
            <a className={`page-link ${i === pageNum ? "bg-dark" : null}`}>
              {i}
            </a>
          </Link>
        </li>
      );
    }
    return pageLinks;
  };

  return (
    <Layout>
      <div>
        <h1>
          Results for: {category} ({recipesTotal})
        </h1>
        <p>Page: {page}</p>
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
        <nav aria-label="Page navigation example">
          {totalNumberOfPages > 1 ? (
            <ul class="pagination justify-content-center">
              <li class={`page-item ${pageNum <= 1 ? "disabled" : ""}`}>
                <Link
                  href={`/site/${category}/${pageNum - 1}?f=${f}&&crit=${crit}`}
                >
                  <a class="page-link ">Prev</a>
                </Link>
              </li>
              {generatePaginationNav()}
              <li
                class={`page-item ${
                  pageNum >= totalNumberOfPages ? "disabled" : ""
                }`}
              >
                <Link
                  href={`/site/${category}/${pageNum + 1}?f=${f}&&crit=${crit}`}
                >
                  <a class="page-link ">Next</a>
                </Link>
              </li>
            </ul>
          ) : null}
        </nav>
      </div>
    </Layout>
  );
};

export default Page;
