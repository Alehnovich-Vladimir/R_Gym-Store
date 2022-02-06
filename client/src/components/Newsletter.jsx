import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "40vh" })}
`;
const Title = styled.h1`
  font-size: 70px;
  color: #01634df4;
  margin-bottom: 20px;
  ${mobile({ fontSize: "46px" })}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    ${mobile({ display: "none" })}
  }
`;
const Description = styled.div`
  font-size: 26px;
  font-weight: 300;
  color: white;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "20px" })}
`;
const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 2px solid lightgrey;
  border-radius: 5px;
  ${mobile({ width: "80%", height: "30px" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
  font-size: 20px;
  ${mobile({ fontSize: "16px" })}
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #01634df4;
  color: white;
  padding-top: 7px;
  border-radius: 5px;
  cursor: pointer;
  ${mobile({ flex: 2, paddingTop: "3px" })}

  &:hover {
    color: #01634df4;
    background-color: gray;
    transition: all 0.9s ease;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
