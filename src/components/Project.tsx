import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/ipbapp.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/learn.png';
import mock07 from '../assets/images/etl.png';
import mock08 from '../assets/images/smartCVA.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/DSC.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projetos Pessoais</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Paulocarneiroo/DSCommerceFrontend?tab=readme-ov-file" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Paulocarneiroo/DSCommerceFrontend?tab=readme-ov-file" target="_blank" rel="noreferrer"><h2>DSCommerce</h2></a>
                <p>DSCommerce é uma aplicação Full Stack de e-commerce desenvolvida com Spring Boot e React. O projeto simula uma loja virtual, com navegação, layout responsivo e consumo de dados dinâmicos do backend, aplicando boas práticas de desenvolvimento web.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Paulocarneiroo/SmartCV-Analyzer-Frontend" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Paulocarneiroo/SmartCV-Analyzer-Frontend" target="_blank" rel="noreferrer"><h2>SmartCV Analyzer</h2></a>
                <p>Aplicação web para análise inteligente de currículos, que compara o perfil do candidato com os requisitos de uma vaga. A ferramenta realiza o upload de currículos em PDF e retorna um score de compatibilidade, além de pontos fortes e pontos de melhoria. O projeto foi desenvolvido com FastAPI no backend e Flutter Web no frontend.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Paulocarneiroo/Data-Pipeline" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Paulocarneiroo/Data-Pipeline" target="_blank" rel="noreferrer"><h2>Data Pipeline (Spring Batch Processing)</h2></a>
                <p>Aplicação em Spring Batch que simula um pipeline ETL real, realizando extração, transformação e carga de dados, com conceitos de engenharia de dados e processamento backend. Esse projeto extrai e carrega dados de um arquivo CSV e transforma em dados persistidos em um banco PostgreSQL e em arquivo JSON.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Paulocarneiroo/WEB-APP-LEARNFY" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Paulocarneiroo/WEB-APP-LEARNFY" target="_blank" rel="noreferrer"><h2>Web App LearnFY</h2></a>
                <p>O LearnFy é um protótipo de aplicativo de aprendizagem que utiliza inteligência artificial rodando localmente com Ollama para gerar conteúdo educacional e quizzes de estudo.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Paulocarneiroo/2-IPB-APP" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Paulocarneiroo/2-IPB-APP" target="_blank" rel="noreferrer"><h2>IPB Mobile App</h2></a>
                <p>Aplicativo desenvolvido em React Native com o propósito de centralizar recursos cristãos da Igreja Presbiteriana do Brasil (IPB) em um só lugar.
                    O app oferece acesso rápido à Bíblia Sagrada, Catecismo Maior de Westminster, Hinário Presbiteriano, Manual Presbiteriano e links úteis para membros e visitantes.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;