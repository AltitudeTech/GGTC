import React, { div } from "react";
import Head from "next/head";

// import Head from '../components/head'
import { Container } from "reactstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Home = () => (
  <div className="root">
    <Head>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/css/bootstrap.css"
      />
    </Head>

    <Container>
      <Navbar />
      <div className="mid-section">
        <Form />
      </div>
    </Container>
    <Footer />
    <style global jsx>{`
      .root {
        padding-top : 10px;
      }
      .mid-section {
        padding: 20px 0px 20px;
        min-height: 56vh;
      }
      @media only screen and (max-width: 1020px) {
        body {
          background-size: cover !important;
        }
      }
      @media only screen and (min-width: 1367px) {
        .mid-section {
          min-height: 62vh;
        }
      }
      body {
        background: url('/static/images/background.svg');
        background-repeat: no-repeat;
        background-size: contain;
        color: white;
      }
      a {
        color: white !important;
        text-decoration: none !important;
      }
      a:hover {
        color: #DAA520 !important;
      }
      `}</style>
  </div>
);

export default Home;
