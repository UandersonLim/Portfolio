import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  font-family: "Rubik Doodle Shadow", sans-serif;
  text-align: center;
  gap: 1rem;
  font-size: 25px;

  .contact{
    display: flex;
    gap: 5rem;
    margin-top: 1rem;
  }

`;
export const Box_text = styled.div`
  width: 60%;
  color: #fff;

  p {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 18px;
  }

  /* RESPONSIVE */
  @media(max-width: 1200px){
    font-size: 70%;

    p{
      font-size: 16px;
    }
  }

  @media(max-width: 768px){
    font-size: 60%;
    width: 100%;

    p{
      font-size: 120%;
      padding: 0 2rem;
    }
  }

  @media(max-width: 480px){

    p{
      text-align: justify;
      font-size: 16px;
      padding: 10px 24px;
    }
  }
`;

// export const Route = styled.div`
//     display: flex;
//     gap: 5rem;
//     font-size: 2rem;
//     cursor: pointer;
//     background-color: #fff;
    
//     a{
//       color: #fff;
//     }

//     a:hover{
//         border-bottom: 1px solid #fff;
//     }

//     /* RESPONSIVE */
//     @media(max-width: 1200px){
//       font-size: 1.5rem;
//     }

//     @media(max-width: 768px){
//       flex-direction: column;
//       gap: 2rem;
//     }
// `