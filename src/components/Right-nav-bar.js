import React from "react";

const RightNavBar = () => {
  return (
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
            <i className="fa-brands fa-twitter"></i>{" "}
            {/*<FontAwesomeIcon icon={brands('twitter')} /> It doesn't work because npm free-brands can't be installed */}
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
  );
};

export default RightNavBar;
