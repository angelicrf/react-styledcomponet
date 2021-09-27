import Flex from "./Flex";
import {Container} from "../StyledComponents/Container.styled";
import {FlexStyled} from "../StyledComponents/Flex.styled";
import {FooterStyled} from "../StyledComponents/Footer.styled";

export default function Footer() {
        return (
            <FooterStyled>
            <Container>
            <FlexStyled>
               <ul>
                   <li>Contact Us</li>
                   <li>Blog</li>
                   <li>Career</li>
               </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>Career</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>Career</li>
                </ul>
            </FlexStyled>
                <p>&copy; 2021 Huddle. All Right Reserved</p>
            </Container>
            </FooterStyled>
        );

}