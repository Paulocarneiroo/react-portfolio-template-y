import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from "../assets/images/me.jpeg";
import '../assets/styles/Main.scss';
import WhatsApp from "@mui/icons-material/WhatsApp";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Paulocarneiroo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/paulocarneiroo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
              <a href="https://wa.me/5583986861876?text=Olá!%20Vim%20pelo%20seu%20portfólio." target="_blank" rel="noreferrer"><WhatsApp/></a>
          </div>
          <h1>Paulo Carneiro</h1>
          <p>Desenvolvedor Full Stack</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Paulocarneiroo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/paulocarneiroo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
              <a href="https://wa.me/5583986861876?text=Olá!%20Vim%20pelo%20seu%20portfólio." target="_blank" rel="noreferrer"><WhatsApp/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;