import React from "react";
import Container from "../components/00_container/Container";
import Lesson from "../components/01_lesson/Lesson";
import About from "../components/02_about/About";
import Content from "../components/03_content/Content";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Container>
        <div className="comps">
          <div className="comps__Left">
            <Lesson />
          </div>
          <div className="comps__Right">
            <About />
            <Content />
          </div>
        </div>
      </Container>
    </>
  );
}
