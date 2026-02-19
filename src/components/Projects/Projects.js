import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calorie from "../project-images/calorie.png";
import crypto from "../project-images/crypto.png";
import empower from "../project-images/empower.png";
import comfy from "../project-images/comfy.png";
// import habits from "../project-images/habitss.png";
import dictionary from "../project-images/dictionary.png";
import bot from "../project-images/bot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calorie}
              isBlog={false}
              title="Calorie Cuisine"
              description="A web app that recommends food based off users health needs, calculates the amount of calories needed for a person based off their gender, exercise frequency, weight or body mass and height."
              ghLink="https://github.com/Nifemi-Adewusi/calorie-calm-cuisine"
              demoLink="https://nifemi-food-recommendation.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empower}
              isBlog={false}
              title="Empowher"
              description="Empowher is a web app that keeps track of a woman's time of the month, it offers period prediction, identifies fertile days and gives recommendations and kind words to support women, because the time of the month isn't an easy one."
              ghLink="https://github.com/Nifemi-Adewusi/empowher-period-pal"
              demoLink="https://nifemi-period-tracker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="crypto tracker"
              description="A Crypto Currency Tracking Web App that gets real time prices of cryptocurrencies, how they've faired over the past 24hours and the past 7days, it basically helps users make informed decisions about which cryptocurrencies to buy and trade based off profitability"
              ghLink="https://github.com/Nifemi-Adewusi/crypto-tracker"
              demoLink="https://nifemi-crypto-tracker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comfy}
              isBlog={false}
              title="Comfy Stores"
              description="An Online Store that displays different items for sale"
              ghLink="https://github.com/Nifemi-Adewusi/Comfy-Store"
              demoLink="https://nifemi-comfy-store.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dictionary}
              isBlog={false}
              title="Web Dictionary"
              description="A Simple Dictionary Web App with which you can search words, get their meanings and pronounciation, you a word of the day, it's powered by the free dictionary API"
              ghLink="https://github.com/Nifemi-Adewusi/Dictionary"
              demoLink="https://my-dictionarryy.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="Chatify."
              description="A chatbot that provides real time assisstance and response to user queries, it can provide mental health tips and all, built using Typescript, Tailwind and Other important Component Libraries, Chatify is your go to Companion and Online Buddy."
              ghLink="https://github.com/Nifemi-Adewusi/bot"
              demoLink="https://nifemi-bot.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
