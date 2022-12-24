import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["MERN", "MEAN"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Narendra Bhosale</h1>
          <h3>
            Fullstack Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="dawn arrow" />
        </a>
      </div>
    </div>
  );
}
