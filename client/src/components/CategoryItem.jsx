import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 50px;
  letter-spacing: 5px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "34px", letterSpacing: "2px" })}

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0px 80px;
    transition: all 0.9s ease;
    border-radius: 10px;
    ${mobile({ display: "none" })}
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  font-size: 18px;
  ${mobile({ fontSize: "12px" })}

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.9s ease;
    ${mobile({ display: "none" })}
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>GO SHOPPING</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
