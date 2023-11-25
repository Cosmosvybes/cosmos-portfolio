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
      img: oysciety,
    },
    {
      id: 9,
      title: "CRUD",
      descripton:
        "simple create, read, update, and delete web app, built with express and mySql",
      url: "This is simple CRUD app, using, MYSQL &EXPRESS",
      repository: "https://github.com/cosmosvybes/CRUD",
      category: "backend",
      img: oysciety,
    },
  ]);

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
        className=" bg-black px-24 text-white py-4 max-sm:flex justify-center items-center flex-col  max-sm:px-4 text-sm max-md:px-16"
      >
        <h1 className="text-slate-400 text-2xl"> Projects</h1>
        <p className="inline text-slate-400 text-bold">
          {" "}
          Here are some of my favourite projects and APIs{" "}
        </p>
        <div className="btns ">
          <button
            className="rounded-sm"
            onClick={() => filterByCategory("all")}
          >
            {" "}
            All
          </button>
          <button
            className="rounded-sm"
            onClick={() => filterByCategory("frontend")}
          >
            Front End
          </button>
          <button
            className="rounded-sm"
            onClick={() => filterByCategory("backend")}
          >
            Back End
          </button>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-2 max-sm:grid-cols-1">
          {categoryFiltered.length < 1
            ? projects.map((project) => (
                <div
                  className="detail h-auto w-95 max-md:w-auto border border-slate-800 shadow shadow-slate-500 flex justify-evenly flex-col items-start
                   px-1 max-sm:w-auto py-2 hover:bg-slate-300 hover:text-slate-900 trasition duration-500"
                  key={project.id}
                >
                  <div className="text h-auto border border-slate-800 py-2 px-2 rounded-0 max-sm:rounded-sm">
                    <img src={project.img} />
                    <div className="description flex justify-start">
                      <div className="h-44 border  border-slate-800 shadow shadow-slate-500 flex flex-col items-center justify-center  ">
                        <h4 className="text-slate-700 text-2xl hover:text-slate-900">
                          {" "}
                          {project.title}
                        </h4>
                        <p className="text-slate-500 hover:text-slate-900 px-2">
                          {project.descripton}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="links-url flex justify-around items-center h-12  border border-slate-800  w-full">
                    <FaGithub
                      onClick={() => window.open(project.repository)}
                      className="hover:text-slate-600 transition duration-150 text-slate-500"
                    />
                    <FaLink
                      onClick={() => window.open(project.url)}
                      className="hover:text-slate-600 transition duration-150 text-slate-500 "
                    />
                  </div>
                  {/* <h4> {project.title}</h4> */}
                  {/* <p>{project.descripton}</p> */}
                </div>
              ))
            : categoryFiltered.map((project) => (
                <div
                  className="detail h-auto w-auto border border-slate-800
                  flex justify-between hover:text-slate-900 rounded-sm max-sm:rounded-md flex-col items-center px-1  max-sm:w-auto hover:bg-slate-300 trasition duration-500"
                  key={project.id}
                >
                  <div className="text h-auto border border-slate-800  px-0 py-0 rounded-md max-sm:rounded-sm">
                    <img src={project.img} />
                  </div>
                  <div className="description h-52 border flex flex-col items-center justify-center border-slate-800">
                    <h4 className="text-slate-500 hover:text-slate-900">
                      {" "}
                      {project.title}
                    </h4>
                    <p className="hover:text-slate-900">{project.descripton}</p>
                  </div>
                  <div className="links-url flex justify-around items-center h-12  border border-slate-800  w-full">
                    <FaGithub
                      onClick={() => window.open(project.repository)}
                      className="hover:text-slate-600 transition duration-150 text-slate-500"
                    />
                    <FaLink
                      onClick={() => window.open(project.url)}
                      className="hover:text-slate-600 transition duration-150 text-slate-500"
                    />
                  </div>
                </div>
              ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
