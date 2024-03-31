import { Header } from "../../Components/Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Projects from "../../../public/assets/icones-linguagens/projects_dk.png";
import fale_comigo from "../../../public/assets/fale_comigo.png";
import Image_Perfil from "../../../public/assets/perfil.png";
import GitHub from "../../../public/assets/github_roxo.png";
import WhatsApp from "../../../public/assets/whatsap.png";
import Linkedin from "../../../public/assets/linkedin.png";
import MainContent from "../../Components/Home/Main";

export const Home = () => {
  return (
    <>
      <Header
        dark={<img src={Button_blue} alt="icone botão azul"/>}
        light={<img src={button_green} alt="alt icone botão verde" />}
        img={Projects}
        profile={Image_Perfil}
        text="Projetos"
        route="/projects"
        imgButtonEnd={fale_comigo}
        textButtonEnd="Contato"
        routeButtonEnd="/Page_Email"
        
      />
      <MainContent
        presentation="Olá, Eu sou Uanderson Lima."
        about="Bem-vindo ao meu mundo criativo! Sou desenvolvedor de software e designer web freelancer especializado em UI/UX. Apaixonado por transformar ideias em experiências digitais excepcionais, combino design intuitivo e funcionalidade para criar soluções únicas. Estou aqui para elevar o seu projeto ao próximo nível. Vamos criar algo extraordinário juntos! 🚀💡"
        contact="Contatos"
        whatApp={WhatsApp}
        linkedin={Linkedin}
        github={GitHub}
      />
    </>
  );
};
