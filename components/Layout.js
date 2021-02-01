import Head from "next/head";
import Navbar from "./Navbar";
import { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";

const Layout = (props) => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const bgImage = document.querySelector(".bg");

      if (bgImage) {
        bgImage.style.transform = `translateY(${window.pageYOffset * 0.8}px)`;
      }
    });
  }, []);
  return (
    <div
      className="main "
      style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
    >
      <Head>
        <title>First Next!</title>
      </Head>
      <Navbar></Navbar>
      <div
        className="bg"
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
      <MDBContainer
        style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
        className="pb-5"
      >
        {props.children}
      </MDBContainer>
      <MDBFooter
        color="elegant-color"
        className="font-small pt-4 mt-4"
        // style={{ position: "absolute", bottom: "0" }}
      >
        <MDBContainer className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="text-uppercase text-center mb-3">Contact</h5>

              <form>
                <MDBInput label="Your e-mail" type="email" />
                <MDBInput type="textarea" label="Message" outline />
                <MDBBtn
                  type="submit"
                  color="warning"
                  className="btn-block mb-3"
                >
                  Send
                </MDBBtn>
              </form>
            </MDBCol>
            <MDBCol md="6" className="text-center">
              <h5 className="text-uppercase text-center mb-3">
                Follow on social media:
              </h5>
              <MDBRow className="h-75">
                <MDBCol sm="6" className="align-self-center ">
                  <MDBBtn
                    color="dark"
                    className="w-100 text-center"
                    href="https://facebook.com/"
                  >
                    <MDBIcon fab icon="facebook" size="5x" />
                  </MDBBtn>
                </MDBCol>

                <MDBCol sm="6" className="align-self-center">
                  <MDBBtn
                    color="dark"
                    className="w-100 text-center"
                    href="https://instagram.com/"
                  >
                    <MDBIcon fab icon="instagram" size="5x" />
                  </MDBBtn>
                </MDBCol>
                <MDBCol sm="6" className="align-self-center">
                  <MDBBtn
                    color="dark"
                    className="w-100 text-center"
                    href="https://youtube.com/"
                  >
                    <MDBIcon fab icon="youtube text-center" size="5x" />
                  </MDBBtn>
                </MDBCol>
                <MDBCol sm="6" className="align-self-center">
                  <MDBBtn
                    color="dark"
                    className="w-100 text-center"
                    href="https://twitter.com/"
                  >
                    <MDBIcon fab icon="twitter" size="5x" />
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          Developed by Desiak
        </div>
      </MDBFooter>
    </div>
  );
};

export default Layout;
