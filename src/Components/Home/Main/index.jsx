import { Main, Box_text } from "./style";

const MainContent = (props) => {
    return(
        <Main>
            <Box_text>
                <h2>{props.presentation}</h2>
                <br></br>
                <p>{props.about}</p>
            </Box_text>

            <ul className="contact">
                <li><a href="https://www.linkedin.com/in/uandersondev/" target="_blank"><img src={props.linkedin} alt="imagem linkedin"/></a></li>
                <li><a href="https://github.com/UandersonLim" target="_blank"><img src={props.github} alt="imagem GitHub"/></a></li>
                <li><a href="https://wa.me/557591428306" target="_blank"><img src={props.whatApp} alt="imagem whatsApp"/></a></li>
            </ul>
        </Main>
    );
};

export default MainContent;