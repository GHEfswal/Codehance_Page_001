import React from "react";
import "./About.scss";
// import "../../../src/responsive.scss";
import Easy from "../../assets/images/easy.svg";
import Lessons from "../../assets/images/20lessons.svg";
import Xp from "../../assets/images/300xp.svg";
import Instructor from "../../assets/images/instructor.svg";

export default function About() {
  return (
    <section className="topRightSection">
      <div className="topRightContent">
        <h5>About this Course</h5>
        <ul className="lessoninfo">
          <li>
            <img src={Easy} alt="" /> &nbsp;Easy
          </li>

          <li>
            <img src={Lessons} alt="" /> &nbsp;20 Lessons
          </li>

          <li>
            <img src={Xp} alt="" /> &nbsp;300 XP
          </li>
        </ul>

        <ul className="categories">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>

        <p className="loremtext">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis
          numquam non facilis? Soluta, veniam quis a, eveniet autem officia
          blanditiis nihil accusamus quas nemo possimus itaque! Dolorum, totam
          perspiciatis.
        </p>
        <div className="instructorInfo">
          <div className="instructorImageFrame">
            <img className="instructorImage" src={Instructor} alt="" />
          </div>
          <div>
            <p>Instructor Name</p>
            <p>Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}
