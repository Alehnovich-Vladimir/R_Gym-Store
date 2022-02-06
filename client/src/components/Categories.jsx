import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "5px", flexDirection: "column" })}
`;
const Title = styled.h1`
  display: inline-block;
  width: 600px;
  text-align: left;
  font-size: 60px;
  color: #01634df4;
  padding: 30px;
  text-shadow: 3px -1px 3px gray;
  ${mobile({ width: "400px", fontSize: "28px", padding: "15px" })}
`;
const Categories = () => {
  return (
    <>
      <Title>Product categories:</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
