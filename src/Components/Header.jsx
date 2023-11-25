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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleContactMe = (e) => {
    e.preventDefault();
    if (!email || !message) {
      return;
    }
    const objectData = { email, message };
    fetch("/api/contact/me/message", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ ...objectData }),
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("operation failed");
        }
        return result.json();
      })
      .then((response) => {
        setResponse(response.response);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setMessage("");
  };
  useEffect(() => {
    setTimeout(() => {
      setResponse("");
    }, 8000);
  }, [response]);
  // time
  const [time, setTime] = useState("");
  const [greetings, setGreetings] = useState("");

  const readTime = () => {
    let hours = new Date().getHours();
    if (hours >= 16) {
      setGreetings("🌙 Good evening");
    } else if (hours >= 12) {
      setGreetings("☀ Good afternoon");
    }
    else {
      setGreetings("🎈 Good morning")
    }

    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "numeric",
        })
      );
    }, 1000);
  };

  useEffect(() => {
    return readTime();
  }, []);

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
            // id="nav-bar"
            to={"projects"}
            className="bg-black cursor-pointer text-white px-1 py-0 rounded-sm  max-md:text-white border hover:border-black hover:bg-slate-300 hover:text-black"
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
              <form onSubmit={handleContactMe}>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <textarea
                  maxLength={200}
                  placeholder="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <input type="submit" value="Send message" id="submit" />
                <p style={{ textAlign: "center", paddingTop: "5px" }}>
                  {" "}
                  {response}
                </p>
              </form>
            </div>
          )}

          {contactFormShow && (
            <FaTimes className="cancel-contact-me" onClick={contactMe} />
          )}
        </div>

        <div className="absolute left-48 max-md:top-0 top-5 w-92 border border-slate-300 h-38 flex justify-between flex-reverse items-center transform ">
          <p className=" text-black text-5xl block max-md:text-2xl">
            {greetings}
          </p>
          {/* <strong className=" text-black block ">{time}</strong> */}
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
        <div className="flex absolute  top-16 right-4  h-auto w-auto justify-between transform ">
          <p className=" inline text-sky-700 text-xl"> {greetings} </p>
          {/* <strong className=" inline text-sky-600 text-2xl"> {time}</strong> */}
        </div>
        {/* 
        <div className="contact-me-mobile">
        
        </div> */}
      </header>

      <section
        className="px-24 py-5 max-md:px-16 max-sm:px-7 bg-black text-slate-400"
        id="head"
      >
        <h1 style={{ fontSize: "2rem" }}>Hey, welcome!</h1>
        <p> My name is, </p>

        <h1>
          cosmos <span style={{ color: "lightgrey" }}> ayo </span>{" "}
        </h1>
        <p>
          {" "}
          I am a{" "}
          <span style={{ color: "lightgrey", fontWeight: "bolder" }}>
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
        <strong style={{ color: "lightgrey", fontSize: "1rem" }}>
          {" "}
          I am open to oppotunities in Nigeria, international or remote gigs!
        </strong>

        <div className="grid grid-cols-2 gap-1 max-sm:grid-cols-2 max-sm:gap-1 py-1">
          <div className="border border-slate-800 w-45 text-slate-600 flex justify-between px-1  items-center max-sm:px-2 max-sm:w-auto py-2  max-sm:rounded-sm max-md:px-3">
            <img src={javascriptlogo} width={"30px"} height={"30px"} />
            <strong>Javascript</strong>
          </div>
          <div className="border border-slate-800 w-45 text-slate-600 flex justify-between px-1  items-center max-sm:px-2 max-sm:w-auto py-2 max-sm:rounded-sm max-md:px-3">
            <img src={reactLogo} width={"30px"} height={"30px"} />
            <strong> React </strong>
          </div>
          <div className="border border-slate-800 w-45 text-slate-600 flex justify-between  px-1 items-center max-sm:px-2 max-sm:w-auto py-2 max-sm:rounded-sm max-md:px-3">
            <img
              src={expressLogo}
              width={"120px"}
              height={"30px"}
              className="max-sm:hidden"
            />
            <strong>express</strong>
          </div>

          <div className="border border-slate-800 w-45 text-slate-600 flex justify-between px-1 items-center max-sm:px-2 max-sm:w-auto py-2 max-sm:rounded-sm max-md:px-3">
            <img src={javascriptlogo} width={"30px"} height={"30px"} />
            <strong> Node</strong>
          </div>

          <div className="border border-slate-800 w-45 text-slate-600 flex justify-between px-1  items-center max-sm:px-2 max-sm:w-auto py-2 max-sm:rounded-sm max-md:px-3">
            <img src={mongoDb} width={"30px"} height={"30px"} />
            <strong> MongoDb</strong>
          </div>
          <div className="border border-slate-800 w-45 text-slate-600 flex justify-between px-1  items-center max-sm:px-2 max-sm:w-auto py-2 max-sm:rounded-sm max-md:px-3">
            <img src={mysql} width={"30px"} height={"30px"} />
            <strong> Mysql</strong>
          </div>
          <div className="border border-slate-800 w-45 text-slate-600 flex justify-between px-1 items-center max-sm:px-2 max-sm:w-auto py-2 max-sm:rounded-sm max-md:px-3">
            <img src={git} width={"70px"} height={"30px"} />
            <strong>Git</strong>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
