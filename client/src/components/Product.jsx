import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 45px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  ${mobile({ height: "250px", margin: "20px" })}

  &:hover ${Info} {
    opacity: 1;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  ${mobile({ height: "90%" })}
`;

const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  transition: all 0.5s ease;

  &:hover {
    color: black;
    transform: scale(1.4);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <StyledLink to={`/product/${item._id}`}>
            <SearchOutlined />
          </StyledLink>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
