import { Button, Col, Container, Row } from "react-bootstrap";
import komin from "./assets/images/Komin.png";
import shop from "./assets/images/shop.jpg";
import event from "./assets/images/event.png";
import solvia from "./assets/images/solvia.png";
import spoilMe from "./assets/images/spoilme.png";
import pokemon from "./assets/images/pokemon-rankers.png";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <Container className="Projects">
        <h1 className="mb-5">My projects</h1>
        <Row>
          <Col>
            <div className="project">
              <div className="project-info">
                <h2>Landing Page</h2>
                <div className="techs">
                  <span>React</span>
                  <span>Material UI</span>
                </div>
              </div>
              <img src={solvia} alt="" />
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/solviaenergie"
                  target="_blank"
                  variant="outline-light"
                >
                  Repository
                </Button>
                <Button
                  href="https://solviaenergie.netlify.app/"
                  target="_blank"
                  variant="outline-light"
                >
                  Website
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <div className="project-info">
                <h2>Video Games Store</h2>
                <div className="techs">
                  {" "}
                  <span>React</span>
                  <span>Redux</span>
                  <span>Axios</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <img src={shop} alt="shop-img" />
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/e-Shop"
                  target="_blank"
                  variant="outline-light"
                >
                  Repository
                </Button>
                <Button
                  href="https://game-zone-eshop.netlify.app/"
                  target="_blank"
                  variant="outline-light"
                >
                  Website
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <div className="project-info">
                <h2>Event Website</h2>
                <div className="techs">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <img src={event} alt="event-img" />
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/event-website"
                  target="_blank"
                  variant="outline-light"
                >
                  Repository
                </Button>
                <Button
                  href="https://event-react-frontend.netlify.app/"
                  target="_blank"
                  variant="outline-light"
                >
                  Website
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <div className="project-info">
                <h2>AI Project</h2>
                <div className="techs">
                  <span>React</span>
                  <span>OpenAI</span>
                </div>
              </div>
              <img
                src={spoilMe}
                alt="ai-project-img"
                style={{ objectFit: "contain" }}
              />
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/spoilme"
                  target="_blank"
                  variant="outline-light"
                >
                  Repository
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <div className="project-info">
                <h2>Pokemon Ranking</h2>
                <div className="techs">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <img
                src={pokemon}
                alt="pokemon-rankers-img"
                style={{ objectFit: "contain" }}
              />
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/pokemon-rankers"
                  target="_blank"
                  variant="outline-light"
                >
                  Repository
                </Button>
                <Button
                  href="https://pokemon-rankers.vercel.app/"
                  target="_blank"
                  variant="outline-light"
                >
                  Website
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="project">
              <div className="project-info">
                <h2>Social Network</h2>
                <div className="techs">
                  <span>TypeScript</span>
                  <span>React Native</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>Socket.io</span>
                </div>
              </div>
              <img src={komin} alt="komin-img" />
              <div className="project-actions">
                <Button
                  href="https://github.com/JacobElbaz/komin"
                  target="_blank"
                  variant="outline-light"
                >
                  Repository
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="Buttons">
          <a
            href="https://github.com/JacobElbaz/"
            target="_blank"
            className="text-decoration-none"
          >
            <button className="btn-grad">To my Github</button>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
