import React from "react";
import "./Lesson.scss";
import VImage from "../../assets/images/codehance_tip_01.svg";
import dissatisfied from "../../assets/images/emoji_dissatisfied.svg";
import indifferent from "../../assets/images/emoji_indifferent.svg";
import satisfied from "../../assets/images/emoji_satisfied.svg";
import download from "../../assets/images/arrow_download.svg";
import complete from "../../assets/images/arrow_continue.svg";

export default function Lesson() {
  return (
    <section className="leftsection">
      <div className="videoFrame">
        <iframe
          // width="100%"
          // height="auto"
          src="https://www.youtube.com/embed/ff5EGdZUoaI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="coursecompletion">
        <div className="coursecompletion__courserating">
          <p>Rate this Course</p>
          <ul className="coursecompletion__emojis">
            <li>
              <a href="">
                <img src={dissatisfied} alt="" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={indifferent} alt="" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={satisfied} alt="" />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="coursecompletion__actionbuttons"> */}
        <div className="coursecompletion__flexblock"></div>
        <button className="coursecompletion__downloadbtn">
          <div className="downloadbtn__info">
            Download File
            <img src={download} alt="" />
          </div>
        </button>

        <button className="coursecompletion__completebtn">
          <div className="completebtn__info">
            Complete & Continue
            <img src={complete} alt="" />
          </div>
        </button>
        {/* </div> */}
      </div>
      <div className="lessonNoteArea">
        <label>Lesson Note</label>

        <textarea
          className="lessonNotetext"
          type="text"
          placeholder="Type Here"
        />
        <div className="resetsave">
          <button className="reset">Reset</button>

          <button className="save">Save</button>
        </div>
      </div>
    </section>
  );
}
