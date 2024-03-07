import { useState } from "react";
import { Box_Header, List } from "./style";
import { Theme } from "../../Services";
import { ChangeTheme } from "../Theme/index.jsx";
import { Link } from "react-router-dom";



export const Header = (props) => {
  const [changeTheme, setChangeTheme] = useState("light");
 
  return (
    <>
      <ChangeTheme theme={changeTheme}/>
      
      <Box_Header>
        <li className="Profile_image">
          <Link to="/">
            <img src={props.profile} alt="imagem perfil"/>
          </Link>
        </li>
        <List>
          <li>
            <Link to={props.route}>
              <img src={props.img} alt="icone"/>
              <figcaption>{props.text}</figcaption>
            </Link>
          </li>

          <li
            className="theme"
            onClick={() => setChangeTheme(Theme(changeTheme))}
          >
            {changeTheme === "light" ? props.dark : props.light}
            <figcaption>Tema</figcaption>
          </li>
          <li>
            <Link to={props.routeButtonEnd}>
              <img src={props.imgButtonEnd} alt="icone"/>
              <figcaption>{props.textButtonEnd}</figcaption>
            </Link>
          </li>
        </List>
      </Box_Header>
    </>
  );
};
