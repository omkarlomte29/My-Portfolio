import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Omkar Lomte </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I'm currently working on backend development.
            <br />
            I'm pursuing in Artificial Intelligence and Data Science Engineering at Vasantdada Patil Pratishthan's College of Enginnering
            Mumbai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography & Cinematography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies & Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Omkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
