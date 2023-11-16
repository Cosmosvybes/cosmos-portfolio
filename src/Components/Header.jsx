import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
// import { gsap } from "gsap";
import javascriptlogo from "../assets/JavaScript_Logo.png";
import reactLogo from "../assets/react.png";
import mongoDb from "../assets/mongodb.png";
import mysql from "../assets/msql.jfif";
import expressLogo from "../assets/express_js_logo.png";
import logo from "../assets/HatchfulExport-All-9/logo_transparent.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaArrowRight,
  FaUserCircle,
  FaHome,
  FaTimes,
  FaAt,
} from "react-icons/fa";
import git from "../assets/git.png";

const Header = () => {
  const [contactFormShow, setContactFormShow] = useState(false);

  const [menuOpenStatus, setMenuStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setMenuStatus(!menuOpenStatus);
    setShowMenu(!showMenu);
  };
  const contactMe = () => {
    setContactFormShow(!contactFormShow);
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" width={"130px"} height={"110px"} />

        <span>
          <Link id="nav-bar" to={"head"} smooth={true} duration={500}>
            home
          </Link>
          <Link id="nav-bar" to={"project"} smooth={true} duration={500}>
            Projects
          </Link>
          <Link id="nav-bar" to={"contact"} onClick={contactMe}>
            Contact
          </Link>
          <Link
            id="nav-bar"
            to={"projects"}
            style={{
              background: "black",
              padding: "3px 10px",
              borderRadius: "4px",
              color: "lightgrey",
              border: "1px solid green",
            }}
          >
            view cv
          </Link>
        </span>
        <div className="socials">
          <FaGithub
            className="icon-item"
            onClick={() => window.open("https://github.com/cosmosvybes")}
          />
          <FaTwitter
            className="icon-item"
            onClick={() => window.open("https://x.com/92XG_cosmos")}
          />
          <FaFacebook
            className="icon-item"
            onClick={() => window.open("https://facebook.com/adewale.dapson")}
          />
          <FaLinkedin
            className="icon-item"
            onClick={() =>
              window.open("https://linkedin.com/in/alfred-chris-ayo-52ba64219")
            }
          />
          <FaAt
            className="icon-item"
            onClick={() => {
              window.open("mailto:alfredchrisayo@gmail.com");
            }}
          />
        </div>
        <div
          className="contact-me"
          style={{ height: contactFormShow && "400px" }}
        >
          {contactFormShow && (
            <div className="">
              <h4> Contact me </h4>
              <form>
                <input type="text" placeholder="email" />
                <textarea maxLength={200} placeholder="message" />
                <input type="submit" value="Send message" id="submit" />
              </form>
            </div>
          )}

          {contactFormShow && (
            <FaTimes className="cancel-contact-me" onClick={contactMe} />
          )}
        </div>
      </header>
      <header className="header tab">
        <img src={logo} alt="logo" width={"130px"} height={"110px"} />
        {!menuOpenStatus && (
          <FaUserCircle
            onClick={handleMenu}
            style={{ fontSize: "23px", color: "black" }}
          />
        )}
        <div className="menu">
          <hr style={{ color: "green" }} />
          <FaGithub
            className="icon-item"
            onClick={() => window.open("https://github.com/cosmosvybes")}
          />
          <FaTwitter
            className="icon-item"
            onClick={() => window.open("https://x.com/92XG_cosmos")}
          />
          <FaFacebook
            className="icon-item"
            onClick={() => window.open("https://facebook.com/adewale.dapson")}
          />
          <FaLinkedin
            className="icon-item"
            onClick={() =>
              window.open("https://linkedin.com/in/alfred-chris-ayo-52ba64219")
            }
          />
          <FaAt
            className="icon-item"
            onClick={() => {
              window.open("mailto:alfredchrisayo@gmail.com");
            }}
          />
        </div>

        <div
          className="dropdown"
          style={{
            width: showMenu && "150px",
            padding: showMenu && "10px 10px",
          }}
        >
          <Link to={"head"} smooth={true} duration={800} className="nav-bars">
            <FaHome />
          </Link>
          <Link
            to={"project"}
            smooth={true}
            duration={800}
            className="nav-bars"
          >
            projects
          </Link>

          <Link className="nav-bars" to="head">
            view cv
          </Link>
          <Link className="nav-bars" to="contact">
            contact
          </Link>
          <FaArrowRight className="icon-item" onClick={handleMenu} />
        </div>
        {/* 
        <div className="contact-me-mobile">
        
        </div> */}
      </header>

      <section className="headline" id="head">
        <h1 style={{ fontSize: "2rem" }}>Hey, welcome!</h1>
        <p> My name is, </p>

        <h1>
          cosmos <span style={{ color: "lightgrey" }}> ayo </span>{" "}
        </h1>
        <p>
          {" "}
          I am a{" "}
          <span style={{ color: "white", fontWeight: "bolder" }}>
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
        <strong style={{ color: "white", fontSize: "1rem" }}>
          {" "}
          I am open to oppotunities in Nigeria, international or remote gigs!
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
      </section>
    </>
  );
};

export default Header;
