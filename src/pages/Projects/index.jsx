import { Header } from "../../Components/Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Home from "../../../public/assets/icones-linguagens/home-button.png";
import Contact from "../../../public/assets/fale_comigo.png";
import Image_Perfil from "../../../public/assets/perfil.png";
import { Buttons } from "../../Components/project/buttons";


export const Projetcs = () => {
  return (
    <>
        
        <Header
          dark={<img src={Button_blue} alt="icone botão azul"/>}
          light={<img src={button_green} alt="icone botão verde"/>}
          img={Home}
          profile={Image_Perfil}
          text="Home"
          route="/"
          imgButtonEnd={Contact}
          textButtonEnd="Contato"
          routeButtonEnd="/Page_Email"
        />

        <Buttons/>
    </>
  );
};
