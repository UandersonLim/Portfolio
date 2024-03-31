import React from "react";
import { Main, Box_text } from "./style";

const MainContent = ({ presentation, about, linkedin, github, whatApp }) => {
  return (
    <Main>
      <Box_text>
        <h2>{presentation}</h2>
        <p>{about}</p>
      </Box_text>

      <ul className="contact">
        <li>
          <a href="https://www.linkedin.com/in/uandersondev/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/UandersonLim" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/557591428306" target="_blank" rel="noopener noreferrer">
            <img src={whatApp} alt="WhatsApp" />
          </a>
        </li>
      </ul>
    </Main>
  );
};

export default MainContent;
