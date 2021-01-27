import { useEffect, useState } from "react";
import Recipe from "../../../components/Recipe";
import { useRouter } from "next/router";
import Link from "next/link";

import { MDBPagination, MDBPageItem, MDBPageNav, MDBListGroup } from "mdbreact";

const Page = () => {
  const router = useRouter();
  const { f, category, page, crit } = router.query;
  const pageNum = parseInt(page);
  const [results, setResults] = useState([]);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
  const [recipesTotal, setRecipesTotal] = useState(0);

  const getData = async (url) => {
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
    if (router) {
      const url = `https://www.themealdb.com/api/json/v1/1/${f}?${crit}=${category}`;
      console.log(crit);
      getData(url);
    }
  }, [f, category, page]);

  const generatePaginationNav = () => {
    let pageLinks = [];
    for (let i = 1; i < totalNumberOfPages + 1; i++) {
      pageLinks.push(
        <MDBPageItem
          className={`page-item shadow-5 ${i === pageNum ? "active" : null}`}
          key={category + i}
        >
          <MDBPageNav
            className="page-link 
              bg-white"
            style={{ boxShadow: "none" }}
          >
            <Link href={`/site/${category}/${i}?f=${f}&&crit=${crit}`}>
              <a className={`page-link ${i === pageNum ? "bg-dark" : null}`}>
                {i}
              </a>
            </Link>
          </MDBPageNav>
        </MDBPageItem>
      );
    }
    return pageLinks;
  };

  const switchResultsHeader = () => {
    let critLabel = "";
    console.log(crit, typeof f);
    switch (crit) {
      case "c":
        critLabel = "Category: ";
        break;
      case "a":
        critLabel = "Cuisine: ";

        break;
      case "s":
        critLabel = "Results for: ";

        break;
      default:
        critLabel = "NOTIHNG";
    }
    return critLabel;
  };

  return (
    <div>
      <h1>
        {switchResultsHeader()}{" "}
        <span className="text-capitalize">{category}</span>
      </h1>
      <p className="results-total">Found {recipesTotal} recipes</p>
      <p className="current-results">
        {recipesTotal > 12
          ? `Looking at results: 
          ${(pageNum - 1) * 12 + 1} to ${
              (pageNum - 1) * 12 + 12 > recipesTotal
                ? recipesTotal
                : (pageNum - 1) * 12 + 12
            }`
          : null}
      </p>
      <MDBListGroup
        className="my-5"
        style={{
          display: "grid",
          gridGap: "50px",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {results}
      </MDBListGroup>

      {totalNumberOfPages > 1 ? (
        <MDBPagination className="justify-content-center">
          <MDBPageItem className={` ${pageNum <= 1 ? "disabled" : ""}`}>
            <MDBPageNav aria-label="previous">
              <Link
                href={`/site/${category}/${pageNum - 1}?f=${f}&&crit=${crit}`}
              >
                <a className="page-link ">Prev</a>
              </Link>
            </MDBPageNav>
          </MDBPageItem>
          {generatePaginationNav()}
          <MDBPageItem
            className={` ${pageNum >= totalNumberOfPages ? "disabled" : ""}`}
          >
            <MDBPageNav aria-label="next">
              <Link
                href={`/site/${category}/${pageNum + 1}?f=${f}&&crit=${crit}`}
              >
                <a className="page-link ">Next</a>
              </Link>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      ) : null}
    </div>
  );
};

export default Page;
