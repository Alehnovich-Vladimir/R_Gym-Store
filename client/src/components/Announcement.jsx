import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50px;
  background-color: #01634df4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
  word-spacing: 7px;
  ${mobile({ height: "30px", fontSize: "12px", wordSpacing: "2px" })}
`;

const Announcement = () => {
  return <Container>Welcome to my first Online Store!!!</Container>;
};

export default Announcement;
