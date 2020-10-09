import Nav from "../components/nav";

export default function Index() {
  return (
    <>
      <Nav
        title="Cristobal Salazar"
        links={[
          { name: "About", route: "/", active: true },
          { name: "Portfolio", route: "/portfolio" },
        ]}
      />
      <header id="intro">
        <canvas id="intro-canvas"></canvas>
        <div className="title-container">
          <div className="canvas-img"></div>
          <div className="canvas-text">
            <h1 className="canvas-title">Cristobal Salazar</h1>
            <h1 className="canvas-subtitle">Full-Stack Web Developer</h1>
          </div>
        </div>
      </header>

      <div className="layout">
        <main className="main" role="main">
          <section id="about">
            <h1 className="heading">Welcome</h1>
            <div className="profile">
              <div className="mobile">
                <div className="mobile-img"></div>
              </div>
              <p className="profile-text">
                My love for software began while studying Audio production at
                Humber College, I started taking interest in the Unity Engine.
                Curious to see what kind of software I could develop, I quickly
                realized that I had the passion and drive to create my own
                applications. After graduating, I enrolled in a certificate
                course at the University of Toronto for Web Development. Being
                already comfortable with C#, and having several years of
                programming experience, it didn’t take long before I added web
                technologies such as React, Javascript, Node.js, and many others
                to my skillset.
              </p>
              <p className="profile-text">
                With a natural attention to detail, everything from design, to
                logic and audio has been crafted from scratch and chosen
                carefully and specifically for each project at hand. If you're
                in need of a developer on your team, or if you’re in need of a
                website to promote your business, showcase your portfolio, and
                bring your app ideas to life, feel free to
                <a href="mailto:chris.salza@gmail.com"> reach out.</a> I'm
                looking forward to connecting with you! <br />
                <br />
                <strong>
                  To view examples of my work created over the years. Please
                  visit the portfolio section.
                </strong>
              </p>
            </div>
          </section>
          <section id="skills">
            <h1 className="heading">Skills</h1>
            <div className="col-3 grid-gap-6">
              <div>
                <h2 className="sub-heading">FRAMEWORKS/LIBS</h2>
                <ul className="pop-list" id="frameworks">
                  <li>Node.js</li>
                  <li>React</li>
                  <li>Nextjs</li>
                  <li>Nestjs</li>
                  <li>Electron</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>jQuery</li>
                </ul>
              </div>
              <div>
                <h2 className="sub-heading">LANGUAGES/TOOLS</h2>
                <ul className="pop-list" id="languages">
                  <li>Typescript/Javascript</li>
                  <li>C#</li>
                  <li>CSS/SASS</li>
                  <li>HTML</li>
                  <li>Docker</li>
                  <li>MongoDb</li>
                  <li>MYSQL</li>
                  <li>Firebase</li>
                  <li>Bash</li>
                  <li>AWS</li>
                </ul>
              </div>
              <div>
                <h2 className="sub-heading">SPOKEN LANGUAGES</h2>
                <ul className="pop-list" id="languages">
                  <li>English</li>
                  <li>French</li>
                  <li>Spanish</li>
                </ul>
              </div>
            </div>
            <br />
          </section>
          <section id="education">
            <h1 className="heading">Education</h1>
            <ul className="pop-list">
              <li>Certificate in Web Development, University of Toronto</li>
              <li>Bachelor of Music, Humber College</li>
              <li>Diploma in Music Performance, Mount Royal University</li>
            </ul>
          </section>
        </main>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-list">
            <h1>About</h1>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h1>Portfolio</h1>
            <ul>
              <li>
                <a href="/portfolio.html#unity">Unity</a>
              </li>
              <li>
                <a href="/portfolio.html#web">Web</a>
              </li>
              <li>
                <a href="/portfolio.html#console">Console</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h1>Social</h1>
            <ul>
              <li>
                <a href="https://www.github.com/CristobalSalazar">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cristobal-salazar-849960164/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h1>Contact</h1>
            <ul>
              <li>
                <a href="mailto:chris.salza@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/e/2PACX-1vSQRbjHXwTC1PVdHMSqL7rufIdKDoVrJtBJx9JJfVN5lGpQIicWx-8nRYQ4N_5_UDnr4cFKOtNfyP16/pub">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright">
          2019 &copy; Cristobal Salazar All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
