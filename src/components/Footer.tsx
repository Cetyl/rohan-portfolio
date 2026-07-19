import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Cetyl" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/rohan-cetyl/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://x.com/rrOOaANn" target="_blank" rel="noreferrer"><XIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} Rohan Poojari.</p>
    </footer>
  );
}

export default Footer;