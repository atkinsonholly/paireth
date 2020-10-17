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
  justify-content: flex-start;
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
  height: 250px;
  margin-bottom: 20px;
  pointer-events: none;
`;

export const Subtitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const About = styled.div`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PairAddress = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  color: #423c86;
  min-height: 90px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 5px;
`;

export const CreatePairMessage = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 5px;
  margin-bottom: 20px;
  color: #423c86;
`;

export const Tokens = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Token = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1024px) {
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: flex-end;
  }
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  margin-right: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #4752ff;
  padding: 20px;
`

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
  :focus {
    outline: none;
  }
  :hover {
    background-color: #423c86;
  }
`;
