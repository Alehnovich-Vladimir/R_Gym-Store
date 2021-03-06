import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Telegram,
} from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  ${mobile({ width: "150px" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  padding-right: 150px;
  ${mobile({ paddingRight: "0px" })}
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  cursor: pointer;
  ${mobile({ width: "30px", height: "30px", marginRight: "20px" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    color: #01634df4;
    font-weight: bold;
    letter-spacing: 2px;
    transition: all 1s ease;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgray" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${mobile({ fontSize: "16px" })}

  &:hover {
    color: #01634df4;
    font-weight: bold;
    letter-spacing: 2px;
    transition: all 1s ease;
  }
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src="https://i.ibb.co/c8Yr0GB/logo.jpg" />
        <Desc>
          For any questions that arise when using our online store, you can
          contact these links on social networks. As soon as possible, our
          representative will contact you to solve your problems. Thank you for
          choosing us...
        </Desc>
        <SocialContainer>
          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <EmailIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links :</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Girl Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact :</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Address
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          PhoneNumber
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          Email
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
