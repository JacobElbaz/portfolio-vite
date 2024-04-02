import CV from "./assets/Jacob Elbaz CV.pdf";

function About() {
  return (
    <div className="about" id="about">
      <h1 style={{ color: "black", fontWeight: "600" }}>About me</h1>
      <div className="flex">
        <div className="blur-card">
          <h2>Bio</h2>
          <div className="flex" style={{ gap: "0 50px", marginTop: 0 }}>
            <div>
              <h3>Name</h3>
              <p>Jacob Elbaz</p>
              <h3>Age</h3>
              <p>29</p>
              <h3>Languages</h3>
              <p>
                English <br /> French <br /> Hebrew
              </p>
            </div>
            <div>
              <h3>Nationality</h3>
              <p>Israeli & French</p>
              <h3>Goal</h3>
              <p>Transform ideas into reality</p>
              <h3>Interest</h3>
              <p>
                Video Games <br /> Automobile <br /> Technologies
              </p>
            </div>
            <div>
              <h3>Description</h3>
              <p>Enthusiastic and driven software engineer with a strong
        aptitude for rapid learning.</p>
            </div>
          </div>
        </div>
        <div className="blur-card">
          <h2>Education</h2>
          <h3>Degree</h3>
          <p>Bachelor of Science</p>
          <h3>Major</h3>
          <p>Software Engineering</p>
          <h3>College</h3>
          <p>Sami Shamoon College, ISRAEL</p>
          <h3>Graduation Year</h3>
          <p>2023</p>
          <h3>GPA</h3>
          <p>86.6</p>
        </div>
        <div className="blur-card">
          <h2>Experience</h2>
          <h3>Company</h3>
          <a href="https://uniq-iota.vercel.app/" title="Link to UNIQ website" className="a-to-p" target="blank">UNIQ Web</a>
          <h3>Role</h3>
          <p>Founder & Full-Stack developer</p>
          <h3>Description</h3>
          <p>
            I provide tailored web solutions, offering services that span from
            basic landing pages to intricate SaaS applications.
          </p>
          <h3>Experience</h3>
          <p>3 Years</p>
        </div>
      </div>
      <div className="Buttons">
        <a
          href={CV}
          download="Jacob Elbaz CV.pdf"
          style={{ textDecoration: "none" }}
        >
          <button className="button-30">Download CV</button>
        </a>
        <a href="#contact" style={{ textDecoration: "none" }}>
          <button className="button-30">Contact me</button>
        </a>
      </div>
    </div>
  );
}

export default About;
