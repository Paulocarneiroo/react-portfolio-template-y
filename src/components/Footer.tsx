import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Paulocarneiroo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/paulocarneiroo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://wa.me/5583986861876?text=Olá!%20Vim%20pelo%20seu%20portfólio." target="_blank" rel="noreferrer"><WhatsApp/></a>
      </div>
      <p>“Nem todos os que vagam estão perdidos.” ️
          — J.R.R. Tolkien 🧙‍♂</p>
    </footer>
  );
}

export default Footer;