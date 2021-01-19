import Layout from "../components/Layout";
import { useEffect, useState } from "react";

//search, categories,
const Home = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const cuisinesList = [
    {
      country: "American",
      imageUrl:
        "https://www.smh.com.au/content/dam/images/g/q/g/o/m/7/image.imgtype.articleLeadwide.620x349.png/1469766176792.png",
    },
    {
      country: "British",
      imageUrl:
        "https://www.expatica.com/app/uploads/sites/10/2020/03/Full-English%E2%80%99-breakfast.jpg",
    },
    {
      country: "Chinese",
      imageUrl:
        "https://www.thenationalnews.com/image/policy:1.884982:1562830908/RM_20190703_DESICHINESE_20.jpg?f=16x9&w=1200&$p$f$w=dfb357e",
    },
    {
      country: "French",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg",
    },
    {
      country: "Greek",
      imageUrl:
        "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496245051-delish-greek-power-bowls-1.jpg",
    },
    {
      country: "Indian",
      imageUrl:
        "https://images.ctfassets.net/3s5io6mnxfqz/6ZImCEzx6UuvuKaAiZEDDN/50479ee4a0902deb4eb1bab720ce248a/image1.jpg",
    },
    {
      country: "Italian",
      imageUrl:
        "https://www.englishclub.com/images/vocabulary/food/italian/italian-food-640.jpg",
    },
    {
      country: "Japanese",
      imageUrl:
        "https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg",
    },
    {
      country: "Mexican",
      imageUrl:
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_and_worst_mexican_dishes_slideshow/493ss_thinkstock_rf_deluxe_burrito.jpg",
    },
    {
      country: "Spanish",
      imageUrl:
        "https://lp-cms-production.imgix.net/image_browser/FoodScene_Ca%CC%81diz-3a1236b97db6.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
    },
    {
      country: "Thai",
      imageUrl:
        "https://www.englishclub.com/images/vocabulary/food/thai/thai-food.jpg",
    },
    {
      country: "Vietnamese",
      imageUrl:
        "https://www.gannett-cdn.com/presto/2019/05/02/PPHX/670b4d36-55d3-485f-87b7-8d8de59b12ee-Pho_Thanh_-_Bo_Luc_Lac.jpg?crop=3509,1974,x176,y317&width=660&height=372&format=pjpg&auto=webp",
    },
  ];
  const bonusCategoriesImgs = [
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sticky-maple-roots-947d8f5.jpg?quality=90&resize=960,872",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoked-salmon-prawn-salad-8559ace.jpg?quality=90&resize=960,872",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/breakfast-in-bed-recipe-1586975778.jpg?crop=0.502xw:1.00xh;0,0&resize=640:*",
  ];
  const [bonusCategories, setBonusCategories] = useState([]);
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
    return () => {};
  }, []);

  useEffect(() => {}, [bonusCategories]);

  if (bonusCategories.length > 0) {
    return (
      <Layout>
        <div
          className="section search-section"
          style={{ position: "relative" }}
        >
          <div
            class="d-flex justify-content-center align-items-center flex-wrap p-4"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "50%",
              minWidth: "250px",
              transform: "translate(-50%,-50%)",
              fontSize: "2em",
            }}
          >
            <input
              type="search"
              class="form-control  form-control-lg my-3"
              placeholder="Enter keyword, eg. chicken"
              aria-label="Search"
              aria-describedby="search-addon"
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                outline: "none",
                fontSize: "0.8em",
              }}
              id="searchInput"
            />
            <button type="button" class="btn btn-dark btn-lg">
              search
            </button>
          </div>

          <img
            className="w-100 "
            style={{
              objectFit: "cover",
              objectPosition: "top",
              height: "86vh",
            }}
            src="https://cdn.pixabay.com/photo/2016/11/29/11/15/breakfast-1869132_1280.jpg"
          ></img>
        </div>
        <div className="section about-section text-center py-5">
          <h2 class=" display-5 mb-4">About</h2>

          <p class="w-50 mx-auto">
            Use this webpage to search through recipes of all kinds comming from
            all around the world. If you have no specific idea, just type an
            ingredient that you feel like would suit you best. There are lots of
            recipes both for meat-eaters and for vegetarians as well! Each
            recipe contains specific instructions and video tutorial to make
            widening your coulinary horizons even easier! Ingredients list is
            also supplied, so, before you start, make sure to get them all!
          </p>
        </div>

        <div className="section section-cuisines">
          <h2 class="text-center display-5">
            Explore a foreign cuisine of your choice!
          </h2>
          <ul
            className="list-group p-5"
            style={{
              display: "grid",
              gridGap: "10px",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              margin: "0",
              listStyle: "none",
            }}
          >
            {cuisinesList.map((cuisine, index) => {
              return (
                <li
                  class="card"
                  key={cuisine.country + index}
                  style={{
                    backgroundImage: `url(${cuisine.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <h4
                    class="text-center p-3 text-white mb-0"
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
                </li>
              );
            })}
          </ul>
        </div>
        <div className="section categories-section ">
          <h2 className="text-center display-5">Other categories</h2>
          <ul className="list-group " style={{ listStyle: "none" }}>
            {bonusCategories.map((cat, index) => {
              const shouldReverseAlign = index % 2;
              return (
                <li
                  className="list-item my-5"
                  key={cat.strCategory + index}
                  style={
                    shouldReverseAlign
                      ? {
                          backgroundImage: `url(${bonusCategoriesImgs[index]})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "left",
                        }
                      : {
                          backgroundImage: `url(${bonusCategoriesImgs[index]})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right",
                        }
                  }
                >
                  <div className="row my-5">
                    <div
                      className={
                        shouldReverseAlign
                          ? "col-md-8 offset-md-3 align-self-center shadow-5 text-center py-3"
                          : "col-md-8 offset-md-1  align-self-center shadow-5 text-center py-3"
                      }
                      style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                    >
                      <h3>{cat.strCategory}s</h3>
                      <p className="my-3 p-3">{cat.strCategoryDescription}</p>
                      <button className="btn btn-dark">Find recipes</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    );
  } else {
    return <div>Nie działa</div>;
  }
};

export default Home;
