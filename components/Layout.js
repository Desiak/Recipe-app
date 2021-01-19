import Head from "next/head";
import Navbar from "./Navbar";
import { useEffect } from "react";

// Navbar: Home Meat(dropdown) Vege Desserts Search
//Subpage: search form desciption, results
const Layout = (props) => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const bgImage = document.querySelector(".background-image");

      if (bgImage) {
        bgImage.style.transform = `translateY(${window.pageYOffset * 0.8}px)`;
      }
    });
  }, []);
  return (
    <div className="main " style={{ position: "relative", overflow: "hidden" }}>
      <Head>
        <title>First Next!</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.0.0/mdb.min.css"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.0.0/mdb.min.js"
        ></script>
      </Head>
      <Navbar></Navbar>
      <div
        className="background-image"
        style={{
          backgroundImage:
            "url(https://lamtourspanama.com/wp-content/uploads/2020/01/food-pattern-free-img.png)",
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          zIndex: "-1",
          width: "100%",
        }}
      ></div>
      <div
        className="container pb-5"
        style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
      >
        {props.children}
      </div>
      <footer class="bg-light text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Footer text</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Footer text</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
          </div>
        </div>

        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <a class="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
