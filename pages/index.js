import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBCol,
  MDBRow,
} from "mdbreact";

const Home = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const cuisinesList = [
    {
      country: "American",
      imageUrl:
        "https://images.unsplash.com/photo-1604908815662-f2755725e687?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    },
    {
      country: "British",
      imageUrl:
        "https://images.unsplash.com/photo-1550304939-ee0be36f980f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      country: "Chinese",
      imageUrl:
        "https://images.unsplash.com/photo-1561194673-7093aadc597d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
    {
      country: "French",
      imageUrl:
        "https://images.unsplash.com/photo-1587723536798-1d3e24a1b4c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      country: "Greek",
      imageUrl:
        "https://images.pexels.com/photos/6065179/pexels-photo-6065179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      country: "Indian",
      imageUrl:
        "https://images.pexels.com/photos/4224304/pexels-photo-4224304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      country: "Italian",
      imageUrl:
        "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      country: "Japanese",
      imageUrl:
        "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      country: "Mexican",
      imageUrl:
        "https://images.unsplash.com/photo-1602097944182-c43423a8056d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
    {
      country: "Spanish",
      imageUrl:
        "https://images.pexels.com/photos/4194390/pexels-photo-4194390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      country: "Thai",
      imageUrl:
        "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      country: "Vietnamese",
      imageUrl:
        "https://images.unsplash.com/photo-1604228994005-d76f4139be68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];
  const bonusCategoriesImgs = [
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sticky-maple-roots-947d8f5.jpg?quality=90&resize=960,872",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoked-salmon-prawn-salad-8559ace.jpg?quality=90&resize=960,872",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/breakfast-in-bed-recipe-1586975778.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
  ];
  const [bonusCategories, setBonusCategories] = useState([]);
  const [inputQuery, setInputQuery] = useState("");

  const getData = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setBonusCategories([
      res.categories[8],
      res.categories[9],
      res.categories[12],
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  if (bonusCategories.length > 0) {
    return (
      <div>
        <div
          className="section search-section"
          style={{ position: "relative" }}
        >
          <div
            className="d-flex justify-content-center align-items-center flex-wrap p-4"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "50%",
              minWidth: "250px",
              zIndex: "2",
              transform: "translate(-50%,-50%)",
              fontSize: "2em",
            }}
          >
            <input
              type="search"
              className="form-control  form-control-lg my-3"
              placeholder="Enter keyword..."
              aria-label="Search"
              aria-describedby="search-addon"
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                outline: "none",
                fontSize: "0.8em",
              }}
              id="searchInput"
              onChange={(e) => setInputQuery(e.target.value)}
            />

            <Link href={`/site/${inputQuery}/1?f=search.php&&crit=s`}>
              <MDBBtn
                color="dark"
                className={`${inputQuery.length < 3 ? "disabled" : ""}`}
              >
                Search
              </MDBBtn>
            </Link>
          </div>

          <div
            className="bg"
            style={{
              position: "relative",
              width: "100%",
              height: "86vh",
              zIndex: "1",
            }}
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/29/11/15/breakfast-1869132_1280.jpg"
              layout="fill"
              alt="background image"
              objectFit="cover"
            ></Image>
          </div>
        </div>
        <MDBRow>
          <MDBCol md="6" className="text-center offset-md-3 my-4">
            <h2 className=" display-5 mb-4">About</h2>

            <p className="mx-auto">
              Use this webpage to search through recipes of all kinds comming
              from all around the world. If you have no specific idea, just type
              an ingredient that you feel like would suit you best. There are
              lots of recipes both for meat-eaters and for vegetarians as well!
              Each recipe contains specific instructions and video tutorial to
              make widening your coulinary horizons even easier! Ingredients
              list is also supplied, so, before you start, make sure to get them
              all!
            </p>
          </MDBCol>
        </MDBRow>
        <div className="section section-cuisines">
          <h2 className="text-center display-5">
            Explore a cuisine of your choice!
          </h2>
          <MDBListGroup
            className="list-group py-5"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              margin: "0",
              listStyle: "none",
            }}
          >
            {cuisinesList.map((cuisine, index) => {
              return (
                <Link
                  href={`/site/${cuisine.country}/1?f=filter.php&&crit=a`}
                  key={cuisine + index}
                >
                  <MDBListGroupItem
                    key={cuisine.country + index}
                    className="p-0"
                  >
                    <div
                      style={{
                        height: "200px",
                        position: "relative",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={cuisine.imageUrl}
                        alt="image cuisine"
                        layout="fill"
                        objectFit="cover"
                      ></Image>
                      <h4
                        className="text-center p-3 text-white mb-0"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.5)",
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {cuisine.country}
                      </h4>
                    </div>
                  </MDBListGroupItem>
                </Link>
              );
            })}
          </MDBListGroup>
        </div>
        <div className="section categories-section">
          <h2 className="text-center display-5">Other categories</h2>
          <MDBListGroup className="list-group " style={{ listStyle: "none" }}>
            {bonusCategories.map((cat, index) => {
              const shouldReverseAlign = index % 2;
              return (
                <MDBListGroupItem
                  className="my-5 border-0"
                  key={cat.strCategory + index}
                  style={
                    shouldReverseAlign
                      ? {
                          backgroundImage: `url(${bonusCategoriesImgs[index]})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "left",
                          backgroundColor: "rgba(0,0,0,0)",
                        }
                      : {
                          backgroundImage: `url(${bonusCategoriesImgs[index]})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right",
                          backgroundColor: "rgba(0,0,0,0)",
                        }
                  }
                >
                  <MDBRow className="mb-5">
                    <MDBCol
                      md="8"
                      className={
                        shouldReverseAlign
                          ? "offset-md-3 align-self-center shadow-5 text-center py-3"
                          : "offset-md-1  align-self-center shadow-5 text-center py-3"
                      }
                      style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                    >
                      <h3>{cat.strCategory}s</h3>
                      <p className="my-3 p-3">{cat.strCategoryDescription}</p>
                      <Link
                        href={`site/${cat.strCategory}/1?f=filter.php&&crit=c`}
                      >
                        <MDBBtn color="dark">Find recipes</MDBBtn>
                      </Link>
                    </MDBCol>
                  </MDBRow>
                </MDBListGroupItem>
              );
            })}
          </MDBListGroup>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
};

export default Home;
