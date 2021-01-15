import Layout from "../components/Layout";
import { useEffect } from "react";

const Home = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";

  const getData = async () => {
    const data = await fetch(url);
    const res = await data.json();
    console.log(res);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  return (
    <Layout>
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export default Home;
