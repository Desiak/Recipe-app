import Head from "next/head";
import Navbar from "./Navbar";

// Navbar: Home Meat(dropdown) Vege Desserts Search
//Subpage: search form desciption, results
const Layout = (props) => {
  return (
    <div
      className="main"
      style={{
        backgroundImage:
          "url(https://lamtourspanama.com/wp-content/uploads/2020/01/food-pattern-free-img.png)",
      }}
    >
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
        className="container"
        style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
