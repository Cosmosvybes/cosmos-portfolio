import { useEffect, useRef } from "react";
import "./Header.css";
import { Button, Link } from "react-scroll";
import { gsap } from "gsap";

const Header = () => {
 
    useEffect(() => {
    const timeLine = gsap.timeline({ defaults: { duration: 1 } });
    timeLine.fromTo(
      ".h1",
      { x: "+=10", opacity: 0 },
      { x: "-=10", opacity: 1, ease: "elastic" }
    );
    timeLine.fromTo(
      ".second-h1",
      { x: "-=10", opacity: 0 },
      { x: "+=10", opacity: 1, ease: "elastic" }
    );
    timeLine.fromTo("p", { scale: 0 }, { scale: 1 });
    }, []);
    

  return (
    <>
      <header className="header">
        <h1 id="logo"> cosmos.dev</h1>
        <span>
          <Link id="nav-bar" to="/home">
            Projects
          </Link>
          <Link id="nav-bar" to="/home">
            About me
          </Link>
          <Link id="nav-bar" to="/home">
            Contact me
          </Link>
        </span>
      </header>

      <section className="headline">
        <h1 className="h1">
          <span style={{ color: "yellow" }}>...exploring </span>
          the cosmos.
        </h1>
        <h1 className="second-h1">
          unveiling the wonders of the
          <span style={{ color: "lightgreen" }}> universe</span>
        </h1>
        <p>
          {" "}
          Hey there, you're welcome to my world of web web development wonders!
        </p>
        <Button> Get in touch</Button>
 
      </section>
    </>
  );
};

export default Header;
