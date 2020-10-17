import styled from "styled-components";
const backgroundImage = '/background.jpg';

export const Header = styled.header`
  background-color: #4752ff;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.body`
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL + backgroundImage});
  background-repeat:no-repeat;
  background-size:cover;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Image = styled.img`
  height: 10vmin;
  pointer-events: none;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const HeroImage = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const TokenInput = styled.input`
  box-sizing: border-box,
  width: 300px,
  height: 75px,
  border-radius: 6px,
  border: none,
  outline: none,
  font-size: 16px,
  padding: 10px,
  overflow: scroll,
  resize: none,
`;

export const Subtitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const About = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const PairAddress = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  color: #4752ff;
  min-height: 80px;
`;

export const Label = styled.div`
  font-size: 16px;
  margin-left: 20px;
  margin-right: 5px;
`;

export const Tokens = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
`;

export const Button = styled.button`
  background-color: #4752ff;
  border: 2px solid #ffffff;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 12px 24px;
  min-width: 180px;
  font-weight: 700;


  ${props => props.hidden && "hidden"}
  
  :focus {
    border: none;
    outline: none;
  }
`;
