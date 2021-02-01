import { useEffect, useState } from "react";
import Recipe from "../../../components/Recipe";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBListGroup,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdbreact";

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
    } else {
      setRecipesTotal(null);
    }
  };

  useEffect(() => {
    if (router) {
      const url = `https://www.themealdb.com/api/json/v1/1/${f}?${crit}=${category}`;
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
  if (recipesTotal > 0) {
    return (
      <div>
        <h1>
          {switchResultsHeader()}{" "}
          <span className="text-capitalize">{category}</span>
        </h1>
        <p className="results-total">Found {recipesTotal} recipes</p>
        <p className="current-results">
          {recipesTotal > 12
            ? `Looking at results 
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
  } else if (recipesTotal === null) {
    return (
      <MDBRow>
        <MDBCol sm="4">
          <Image
            src="https://images.unsplash.com/photo-1511029029301-60680e65f7c7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhZCUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            layout="responsive"
            height={300}
            width={200}
            objectFit="contain"
            alt="no results image"
          ></Image>
        </MDBCol>
        <MDBCol sm="8">
          <div className="w-100 h-100 d-flex flex-wrap justify-content-center align-items-center">
            <h1 className="w-100 text-center">Opps!</h1>
            <h3 className="w-100 text-center">
              Apparently, nothing was found...
            </h3>
            <Link href="/">
              <MDBBtn color="dark">Back to homepage</MDBBtn>
            </Link>
          </div>
        </MDBCol>
      </MDBRow>
    );
  } else {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
};

export default Page;
