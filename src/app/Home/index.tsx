// Components
import Contact from "./components/Contact";
import Evaluations from "./components/Evaluations";
import Experience from "./components/Experience";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <>
      <Main />
      <Skills />
      <Projects />
      <Experience />
      <Evaluations />
      <Contact />
    </>
  );
};

export default Home;
