import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Rohan Poojari" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Cetyl" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rohan-cetyl/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/rrOOaANn" target="_blank" rel="noreferrer"><XIcon/></a>
          </div>
          <h1>Rohan Poojari</h1>
          <p>Cloud Platform Engineer | 2x AWS & 3x GCP Professional Certified | DevOps, Terraform & Automation</p>
          <p className="tagline">DevOps Engineer with a track record of optimizing cloud infrastructure, driving aggressive cost management, and ensuring production reliability — hands-on with AWS cost optimization, CI/CD automation, Kubernetes cluster design, and Infrastructure as Code (Terraform, Ansible, CloudFormation).</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Cetyl" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rohan-cetyl/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/rrOOaANn" target="_blank" rel="noreferrer"><XIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;