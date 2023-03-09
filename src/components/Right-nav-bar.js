import React from "react";

function RightNavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a>
              <i>{/*Put Here FontAwesomeIcon for GitHub*/}</i>
            </a>
          </li>
          <li>
            <a>
              <i>{/*Put Here FontAwesomeIcon for Twitter*/}</i>
            </a>
          </li>
          <li>
            <a>
              <i>{/*Put Here FontAwesomeIcon for CodePen*/}</i>
            </a>
          </li>
          <li>
            <a>
              <i>{/*Put Here FontAwesomeIcon for YouTube*/}</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default RightNavBar;