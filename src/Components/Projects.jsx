import { Button } from "react-scroll";
import "./Projects.css";
import img from "../assets/react.png";
import { FaGitAlt, FaGithub, FaGithubAlt, FaLink } from "react-icons/fa";
const Projects = () => {
  return (
    <>
      <section id="project" className="projects-container">
        <h1> Projects</h1>
        <p>
          {" "}
          Here are my some of the favourite full stack application, and APIs{" "}
        </p>
        <div className="btns">
          <button> All</button>
          <button> Front end</button>
          <Button>Back end</Button>
        </div>

        <div className="project-list">
          {[1, 2, 3].map((projects) => (
            <div className="project-detail" key={`${Math.random()}`}>
              <img src={img} />
              <h1> Oysciety</h1>
              <p>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus vero blanditiis perspiciatis assumenda maxime!
                Aut perferendis consequuntur totam, voluptas quasi autem tenetur
                veritatis temporibus sint quisquam optio. Odit, dicta fugiat.
              </p>
              <div className="links-repo">
                <FaGithub />
                <FaLink />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
