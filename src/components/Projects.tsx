import Nav from "./Nav";
import "../App.css";
import { MoveDown } from "lucide-react";
import Card from "./Card";

export default function Projects() {
  return (
    <>
      <div className="Projects">
        <section className="hero-projects">
          <p className="hero-text" style={{ fontSize: 128 }}>
            <u>Projects</u>
          </p>
          <MoveDown />
        </section>

        <section className="projects-content">
          <div className="projects-grid">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
      <Nav />
    </>
  );
}
