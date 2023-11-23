import "./Projects.css";
import img from "../assets/react.png";
import { FaGithub, FaLink } from "react-icons/fa";
import { useState } from "react";
import cellie from "../assets/cellie.png";
import knowyours from "../assets/knowyours.png";
import oysciety from "../assets/oysciety.png";
import scrambeast from "../assets/scrambeast.png";
import apiLogo from "../assets/Api.jpeg";
import gsap from "gsap";

const Projects = () => {
  const [categoryFiltered, setFilter] = useState([]);
  const [projects] = useState([
    {
      id: 1,
      title: "Oysceity app",
      descripton: `This is a Fullstack applicaton for institution information & communication, user can initiate a letter,
         share and discuss with any authorities involved, and share to the general page if needed!  `,
      url: "https://oysciety-be.onrender.com",
      repository: "https://github.com/cosmosvybes/oyscatech",
      category: "frontend",
      img: oysciety,
    },
    {
      id: 3,
      title: "Scrambeast",
      descripton:
        "This is simple words scramble game, where player just form new words from the series of alphabet displayed to the screen",
      url: "https://scrambeast.vercel.app",
      repository: "https://github.com/cosmosvybes/scrambeast",
      category: "frontend",
      img: scrambeast,
    },
    {
      id: 2,
      title: "Cellie app",
      descripton:
        "This is a simple app for checking the name of network provider of any number in nigeria",
      url: "https://cosmosvybes.github.io/cellie/",
      repository: "https://github.com/cosmosvybes/cellie",
      category: "frontend",
      img: cellie,
    },

    {
      id: 5,
      title: "Knowyours app",
      descripton:
        "This is a static application which tells about people personality based on the their star signs",
      url: "https://knowyours.netlify.app",
      repository: "https://github.com/cosmosvybes/know-yourself-App",
      category: "frontend",
      img: knowyours,
    },
    {
      id: 4,
      title: "Library Manager API",
      descripton: `This is a digital library management API with Authorization & Authentication,
         this api allows library mananger can keep track of the available books, search for books with TITLE , AUTHOR, OR ISBN `,
      url: "",
      repository: "https://github.com/cosmosvybes/lbrary-manager",
      category: "backend",
      img: apiLogo,
    },
    {
      id: 9,
      title: "CRUD",
      descripton:
        "simple create, read, update, and delete web app, built with express and mySql",
      url: "This is simple CRUD app, using, MYSQL &EXPRESS",
      repository: "https://github.com/cosmosvybes/CRUD",
      category: "backend",
      img: apiLogo,
    },
  ]);
  // <FaGithub onClick={() => window.open(project.repository)} />
  //                   <FaLink onClick={() => window.open(project.url)} />

  const filterByCategory = (category) => {
    const timeLine = gsap.timeline({ defaults: { duration: 1 } });
    timeLine.fromTo(
      ".detail",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, rotate: 720 }
    );
    setFilter(
      category == "all"
        ? projects
        : projects.filter((project) => project.category == category)
    );
  };

  return (
    <>
      <section
        id="project"
        className=" bg-black px-24 text-white py-4 max-sm:flex justify-center items-center flex-col  max-sm:px-4 text-sm max-md:px-16 "
      >
        <h1> Projects</h1>
        <p className="inline">
          {" "}
          Here are some of my favourite projects and APIs{" "}
        </p>
        <div className="btns">
          <button onClick={() => filterByCategory("all")}> All</button>
          <button onClick={() => filterByCategory("frontend")}>
            Front End
          </button>
          <button onClick={() => filterByCategory("backend")}>Back End</button>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {categoryFiltered.length < 1
            ? projects.map((project) => (
                <div
                  className="detail h-auto w-86 border border-slate-900 flex justify-between flex-col items-center
                   px-1 py-2 max-sm:w-auto  hover:bg-slate-800 trasition duration-500"
                  key={project.id}
                >
                  <img src={project.img} />
                  <div className="links-repo">
                    <FaGithub onClick={() => window.open(project.repository)} />
                    <FaLink onClick={() => window.open(project.url)} />
                  </div>
                  <h4> {project.title}</h4>
                  <p>{project.descripton}</p>
                </div>
              ))
            : categoryFiltered.map((project) => (
                <div
                  className="detail h-auto w-86 border border-slate-900 
                  flex justify-between flex-col items-center px-1 py-2 max-sm:w-auto hover:bg-slate-800 trasition duration-500"
                  key={project.id}
                >
                  <img src={project.img} />
                  <div className="links-repo">
                    <FaGithub onClick={() => window.open(project.repository)} />
                    <FaLink onClick={() => window.open(project.url)} />
                  </div>
                  <h4> {project.title}</h4>
                  <p>{project.descripton}</p>
                </div>
              ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
