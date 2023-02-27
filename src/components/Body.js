import react from "react";

function Body() {
  return (
    <div>
      <div className="non-transp"></div>
      <div className="div-letters">
        <text className="d">D</text>
        <text className="k">K</text>
      </div>
      <nav id="navtop">
        <text className="nav-text">
          sdsd
          <a id="anchor" className="front">
            FRONT
          </a>
          jsdkasjhdkjsadhskjsdkksmskskkssdsdsjd
          <a id="anchor" className="developer">
            DEVELOPER
          </a>
          jsdkddi ksdfhksjdfhksjdhjfsdasdashssl
          <a id="anchor" className="end">
            END
          </a>
          ksldkfjlskdfjlksdjflksalksdjlaksdjlj o
          <a id="anchor" className="DANILO">
            DANILO
          </a>
          alksdjlasjsldjhvifsjdhsdhfksjpaodjhhdwefgqsislkdfnk
          <a id="anchor" className="kulisic">
            KULISIC
          </a>
          i skdqwopjfjf
          <a id="anchor" className="pragmatic">
            SOFTWARE
          </a>
          skhdfksdjfskdfhsdfsasd
          <a id="anchor" className="programmer">
            ENGINEER
          </a>
          kjsqgfjtsdadewl
        </text>
      </nav>
      <nav id="navside">
        <ul className="ul-side">
          <li className="github">
            <a
              id="social"
              className="anchor-github"
              href="https://github.com/kulisic4"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="twitter">
            <a
              id="social"
              className="anchor-twitter"
              href="https://twitter.com/kulisic4"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="linkedin">
            <a
              id="social"
              className="anchor-linkedin"
              href="https://www.linkedin.com/in/danilo-kulisic-423113259/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="youtube">
            <a
              id="social"
              className="anchor-youtube"
              href="https://www.youtube.com/@danilokulisic"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </nav>

      <nav className="nav-left">
        <ul className="ul-left">
          <a className="anchor-ab" href="#anchor-ab">
            <li className="about-li">
              <header className="left-menu">ABOUT</header>
            </li>
          </a>
          <a className="anchor-proj" href="#anchor-proj">
            <li className="projects-li">
              <header className="left-menu">PROJECTS</header>
            </li>
          </a>
          <a className="anchor-cont" href="#anchor-cont">
            <li className="contact-li">
              <header className="left-menu">CONTACT</header>
            </li>
          </a>
        </ul>
      </nav>

      {/*<!-- <div className="float">
      <div className="div-span">
        <span className="span-about">About</span>
        <span className="projects-about">Projects</span>
        <span className="contact-about">Contact</span>
      </div>
      <div className="menu">
        <div id="menu" className="about"></div>
        <div id="menu" className="projects"></div>
        <div id="menu" className="contact"></div>
      </div>
    </div> -->*/}

      <section className="section1" id="anchor-ab">
        <h1>ABOUT</h1>

        <p className="p-about">
          Hello everyone! My name is Danilo Kulisic and I am on my path to
          becoming a Frontend Developer! I am currently learning Javascript on
          freeCodeCamp, and I have recently started to do Codewars Algorithms. I
          have cloned an Apple Page website, and you can check it in the
          Projects section. This is my portfolio website, so you can check what
          skils I have. Feel free to check out the links on the right side of
          the page! Those are the links that will lead you to my social networks
          and GitHub.
        </p>

        <img
          className="img-about"
          src="portfolio-react\src\Images\Danilo Kulisic.jpg"
        />
      </section>
      <section className="section2" id="anchor-proj">
        <h1>PROJECTS</h1>
        <p className="apple-text">
          Welcome to my first project ever! I was learning about HTML and CSS
          for about a month, and those are the results. With the help of my
          mentor
          <a className="projects-anchor" href="https://www.slavo.io/">
            Slavoljub Popovic
          </a>
          , I made a great progress in a short period of time. With help of the
          right people and persistence you can improve your progress. Here is
          the video of fully functional Clone Apple Page I made, using only HTML
          and CSS. Here is also the link of the page so you can try it out
          yourself
          <a
            className="projects-anchor"
            href="https://kulisic4.github.io/applelandingpagesample/"
          >
            APPLE CLONE PAGE
          </a>
        </p>
        <img
          className="apple-vid"
          src="portfolio-react\public\Apple clone page GIF.gif"
        />
        <div id="like-button-root"></div>
      </section>
      <section className="section3" id="anchor-cont">
        <h1>CONTACT</h1>
        <form action="submit-form.php" method="post">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>

          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </section>
      <script
        src="https://unpkg.com/react@18/umd/react.development.js"
        crossOrigin="true"
      ></script>
      <script
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
        crossOrigin="true"
      ></script>
      <script src="like-button.js"></script>
    </div>
  );
}

export default Body;
