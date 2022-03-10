import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IBike } from "../../../typings/bikes";
import Bikes from "../../components/bikes";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

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

function TopBikes() {
  const [current, setCurrent] = useState(0);

  return (
    <TopBikesContainer>
      <Title>Explore Our Top Deals</Title>
      <BikesContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={[
            <Bikes {...bike1} />,
            <Bikes {...bike2} />,
            <Bikes {...bike2} />,
            <Bikes {...bike1} />,
            <Bikes {...bike1} />,
          ]}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
        />
        <Dots value={current} onChange={setCurrent} number={2} />
      </BikesContainer>
    </TopBikesContainer>
  );
}

export default TopBikes;
