import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/Responsive";
import BikeImg from "../../../assets/images/bike1.png";

const AboutUsContainer = styled.div`
  ${tw`
  w-full
  flex
  flex-wrap
  items-center
  2xl:justify-center
  pt-4
  pb-4
  pr-7
  pl-7
  md:pl-0
  md:pr-0
  bg-white

`}
`;

const BikeContainer = styled.div`
width:auto
height: 15em;
margin-left: -3px;

img {
  width: auto;
  height:100%;
}

@media (min-width: ${SCREENS.md}){
  height:28em;
}

@media (min-width: ${SCREENS.lg}){
  height:30em;
}

@media (min-width: ${SCREENS["2xl"]}){
  height:35em;
  margin-left
}
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:mb-8
    2xl:mb-20
    md:ml-6
    2xl:ml-16
`}
`;

const Title = styled.h1`
  ${tw`
  text-black
  text-2xl
  md:text-5xl
  font-extrabold
  md:font-black
  md:leading-relaxed
`}
`;

const InfoText = styled.p`
  ${tw`
  max-w-2xl
  text-sm
  md:text-base
  text-gray-500
  font-normal
  mt-4
`}
`;

function AboutUs() {
  return (
    <AboutUsContainer>
      <BikeContainer>
        <img src={BikeImg} />
      </BikeContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse
          eveniet sapiente maiores, autem incidunt tempore harum sed. Amet
          consequuntur saepe nesciunt sequi ipsum cupiditate? Est, tempora
          nihil! Perspiciatis, aliquid? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nemo voluptates ratione ipsam, amet consectetur
          aliquam libero, nihil expedita ex ducimus accusantium minima hic.
          Itaque at similique veritatis excepturi, explicabo nostrum? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Possimus facilis
          quas, qui voluptates sapiente dolor nemo, labore iure cum beatae,
          voluptatum sequi tenetur ad cumque! Corporis quibusdam ipsum
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}

export default AboutUs;
