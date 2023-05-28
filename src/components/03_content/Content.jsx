import React from "react";
import "./Content.scss";
import Dropdown from "../../assets/images/drop_down_arrow.svg";
import Dropup from "../../assets/images/drop_up_arrow.svg";

function ContentItem(props) {
  return (
    <section className="bottomRightSection">
      <div className="bottomRightContent">
        <h4>Course Content</h4>
        <div>
          <div className="partGrouping">
            <div className="partGrouping__Menu">
              <h5>{props.part}</h5>
              <div>{props.dropMenuCheckbox}</div>
              {/* <input
                type="checkbox"
                className="partGrouping__toggle"
                id="dropArrow"
              /> */}
              <label htmlFor="dropArrow">{props.dropDownImage}</label>
            </div>

            <div className="partGrouping__courseProgress">
              {props.courseElapsed} | {props.timeRemaining} Left
            </div>

            <div className="partGrouping__courseTitles">
              <h5>
                {props.checkbox} {props.courseTitle}
                <div>{props.courseDuration}</div>
              </h5>

              <h5>
                {props.checkbox} {props.courseTitle}
                <div>{props.courseDuration}</div>
              </h5>

              <h5>
                {props.checkbox} {props.courseTitle}
                <div>{props.courseDuration}</div>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Content() {
  const contentpart1 = {
    part: "Part 1",
    courseElapsed: "1/3",
    timeRemaining: "4min",
    checkbox: <input type="checkbox" />,
    courseTitle: "Course Title",
    courseDuration: "2min",
    dropDownImage: <img src={Dropup} alt="" />,
    dropMenuCheckbox: <input type="checkbox" id="dropArrow" />,
  };

  const contentpart2 = {
    part: "Part 2",
    courseElapsed: "1/3",
    timeRemaining: "35min",
    checkbox: <input type="checkbox" />,
    courseTitle: "Course Title",
    courseDuration: "2min",
    dropDownImage: <img src={Dropup} alt="" />,
    dropMenuCheckbox: <input type="checkbox" id="dropArrow" />,
  };

  const contentpart3 = {
    part: "Part 3",
    courseElapsed: "0/3",
    timeRemaining: "35min",
    checkbox: <input type="checkbox" />,
    courseTitle: "Course Title",
    courseDuration: "2min",
    dropDownImage: <img src={Dropup} alt="" />,
    dropMenuCheckbox: <input type="checkbox" id="dropArrow" />,
  };

  return (
    <div>
      <ContentItem {...contentpart1} />
      <ContentItem {...contentpart2} />
      <ContentItem {...contentpart3} />
    </div>
  );
}
