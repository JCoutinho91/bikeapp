import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../Logo";

const FooterContainer = styled.div`
  min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    min-w-full
    pt-4
    md:pt-12
    pt-10
    items-center
    justify-center
`};
`;

const InnerContainer = styled.div`
  ${tw`
    flex    
    w-full
    h-full
    max-w-screen-2xl
`}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-10

`}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
    
`}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
`}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
    `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
`}
  & > a {
    ${tw`
    text-xs
    text-white
    transition-all
    hover:text-gray-300
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3
`}
`;

const HorizontalContainer = styled.div`
  ${tw`
  flex
  items-center
`}
`;

const RedIcon = styled.span`
  ${tw`
  w-8
  h-8
  rounded-full
  bg-red-500
  flex
  items-center
  justify-center
  text-white
  text-base
  mr-2
`}
`;

const SmallText = styled.h6`
  ${tw`
  text-sm
  text-white
  
`}
`;

function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            BiciRent is a Bicycle Renting Service located in many countries
            around the wold which has a high quality bicycles and top rated
            services
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              {" "}
              <a href="#">Home</a>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <a href="#">Our Bicycles</a>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <a href="#">Services</a>{" "}
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              {" "}
              <a href="#">Book a Bike Today!</a>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <a href="#">FAQ</a>{" "}
            </ListItem>
            <ListItem>
              {" "}
              <a href="#">Contacts</a>{" "}
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+33 543-222-1114</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@Bicirent.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
}

export default Footer;
