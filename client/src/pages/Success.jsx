import { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { clearCart } from "../redux/cartRedux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://i.ibb.co/60wV6vv/success.jpg") center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const Title = styled.div`
  font-size: 46px;
  font-weight: bold;
  font-style: italic;
  background: linear-gradient(135deg, #01634d99 20%, #d43f64d6 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  padding: 20px;
  border: 5px solid transparent;
  border-image: linear-gradient(135deg, #d43f64d6 20%, #01634d99 70%);
  border-image-slice: 1;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 60%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 15px;
  background-color: rgba(1, 99, 77, 0.6);
  color: white;
  font-weight: 500;
  font-size: 24px;
`;

const Success = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart())
  }, []);
  console.log(location);

  return (
    <Container>
      <Wrapper>
        <Title>SUCCESSFUL PAYMENT</Title>
        <Link to="/">
          <Button>GO HOME PAGE</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
