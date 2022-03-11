import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IBike } from "../../../typings/bikes";
import Bikes from "../../components/bikes";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/Responsive";

const bike1: IBike = {
  thumbnailSrc:
    "https://trek.scene7.com/is/image/TrekBicycleProducts/MadoneSLR9_22_35716_D_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440",
  name: "Trek",
  fabrication: "Spain",
  dailyPrice: 5,
  monthlyPrice: 500,
  size: "XL",
  year: 2000,
};
const bike2: IBike = {
  thumbnailSrc:
    "https://www.reidbikes.com/wp-content/uploads/2021/04/BV64666REI_SAG_1-900x588.png",
  name: "Ride",
  fabrication: "Norway",
  dailyPrice: 8,
  monthlyPrice: 300,
  size: "S",
  year: 2022,
};

const TopBikesContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center 
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
`}
`;

const Title = styled.h2`
  ${tw`
        text-xl
        lg:text-5xl
        text-black
        font-extrabold
    `}
`;

const BikesContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10

`}
`;

const bikes = [
  <Bikes {...bike1} />,
  <Bikes {...bike2} />,
  <Bikes {...bike2} />,
  <Bikes {...bike1} />,
  <Bikes {...bike1} />,
];

function TopBikes() {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const numberOfDots = isMobile ? bikes.length : Math.ceil(bikes.length / 3);

  return (
    <TopBikesContainer>
      <Title>Explore Our Top Deals</Title>
      <BikesContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={bikes}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </BikesContainer>
    </TopBikesContainer>
  );
}

export default TopBikes;
