import { Link } from "react-router-dom";
import "./Home.css";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Full Stack Development",
    path: "/fullStackDevelopment",
  },
  {
    name: "Data Science",
    path: "/dataScience",
  },
  {
    name: "Cyber Security",
    path: "/cyberSecurity",
  },
  {
    name: "Career",
    path: "/career",
  },
];

const Home = () => {
  return (
    <>
      <div className="home">
        {links.map((link) => (
          <Link className="link" key={link.path} to={link.path} style={{ margin: 16 }}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
