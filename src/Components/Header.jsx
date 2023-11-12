import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
// import { gsap } from "gsap";
import javascriptlogo from "../assets/JavaScript_Logo.png";
import reactLogo from "../assets/react.png";
import mongoDb from "../assets/mongodb.png";
import mysql from "../assets/msql.jfif";
import expressLogo from "../assets/express_js_logo.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";
import git from "../assets/git.png";

const Header = () => {
  //   useEffect(() => {
  //     const timeLine = gsap.timeline({ defaults: { duration: 1 } });
  //     timeLine.fromTo(
  //       ".h1",
  //       { x: "+=10", opacity: 0 },
  //       { x: "-=10", opacity: 1, ease: "elastic" }
  //     );
  //     timeLine.fromTo(
  //       ".second-h1",
  //       { x: "-=10", opacity: 0 },
  //       { x: "+=10", opacity: 1, ease: "elastic" }
  //     );
  //     // timeLine.fromTo("p", { scale: 0 }, { scale: 1 });
  //   }, []);

  const [menuOpenStatus, setMenuStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setMenuStatus(true);
    setShowMenu(true);
  };

  return (
    <>
      <header className="header">
        <h1 id="logo"> cosmos</h1>

        <span>
          <Link id="nav-bar" to={"projects"} smooth={true} duration={800}>
            Projects
          </Link>
          <Link id="nav-bar" to={"projects"}>
            Media
          </Link>
          <Link id="nav-bar" to={"projects"}>
            Contact
          </Link>

          <Link
            id="nav-bar"
            to={"projects"}
            style={{
              background: "green",
              padding: "0px 10px",
              borderRadius: "4px",
              color: "lightgrey",
              border: "1px solid green",
            }}
          >
            view cv
          </Link>
        </span>
      </header>
      <header className="header tab">
        <h1 id="logo"> cosmos </h1>
        {!menuOpenStatus && <FaPaperPlane onClick={handleMenu} />}
        <div className="menu">
          <hr style={{ color: "green" }} />
          <FaGithub className="icon-item" />
          <FaTwitter className="icon-item" />
          <FaFacebook className="icon-item" />
          <FaLinkedin className="icon-item" />
        </div>

        <div className="dropdown" style={{ width: showMenu && "100px" }}>
          <Link
            to={"projects"}
            className="nav-bars"
            smooth={true}
            duration={800}
          >
            Projects
          </Link>
          <Link
            id="projects"
            className="nav-bars"
            to={"projects"}
            smooth={true}
            duration={800}
          >
            Media
          </Link>
          <Link
            id="projects"
            className="nav-bars"
            to={"projects"}
            smooth={true}
            duration={800}
          >
            Contact
          </Link>
          <FaArrowRight className="icon-item" onClick={handleMenu} />
        </div>
      </header>
      
      <section className="headline" id="headline">
        <p> Hello my name is, </p>

        <h1>
          cosmos <span style={{ color: "green" }}> ayo </span>{" "}
        </h1>
        <p>
          {" "}
          I am a{" "}
          <span style={{ color: "green", fontWeight: "bolder" }}>
            web developer
          </span>{" "}
          based in nigeria, skilled at crafting websites and web APIs, using
          React, Expressjs, Nodejs MongoDb, and Mysql. A lifelong learner of new
          web technologies .
        </p>
        <p>
          {" "}
          I have strength in both the back-end and front-end . I have excellent
          commercial experience in this era , with a keen interest to expand my
          skillset in a diverse range of technologies!
        </p>
        <strong style={{ color: "green" }}>
          {" "}
          I am open to oppotunities in Nigeria, International and Remote
          Opportunities.{" "}
        </strong>

        <div className="tech-stacks">
          <div className="stack">
            <img src={javascriptlogo} width={"30px"} height={"30px"} />
            <strong>Javascript</strong>
          </div>
          <div className="stack">
            <img src={reactLogo} width={"30px"} height={"30px"} />
            <strong> React </strong>
          </div>
          <div className="stack">
            <img src={expressLogo} width={"120px"} height={"30px"} />
            <strong>express</strong>
          </div>

          <div className="stack">
            <img src={javascriptlogo} width={"30px"} height={"30px"} />
            <strong> Node</strong>
          </div>

          <div className="stack">
            <img src={mongoDb} width={"30px"} height={"30px"} />
            <strong> MongoDb</strong>
          </div>
          <div className="stack">
            <img src={mysql} width={"30px"} height={"30px"} />
            <strong> Mysql</strong>
          </div>
          <div className="stack">
            <img src={git} width={"70px"} height={"30px"} />
            <strong> Version control</strong>
          </div>
        </div>

        {/* <Button> VIEW CV </Button> */}
      </section>
    </>
  );
};

export default Header;
