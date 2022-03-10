import {
  faEllipsis,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IBike } from "../../../typings/bikes";
import Button from "../Button";

interface IBikeProps extends IBike {}

const BikeContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6

`};
`;

const BikeThumbnail = styled.div`
width:100%
height:auto;

img{
    width: 100%;
    height: 100%;
}
`;

const BikeName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
`}
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
`}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
`};
`;

const DailyPrice = styled.h4`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3

`}
`;

const MonthlyPrice = styled.h4`
  ${tw`
    text-gray-500
    font-bold
    text-sm
`}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
`}
`;

const BikeDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between

`}
`;

const BikeDetail = styled.span`
  ${tw`
        flex
        items-center

    `}
`;

const BikeInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
`}
`;

const Separator = styled.div`
min-width:100%
min-height:1px;
${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
`}
`;
const RentButton = styled(Button)`
  ${tw`
  min-w-full
  mt-5
`}
`;

function Bikes(props: IBikeProps) {
  const {
    name,
    thumbnailSrc,
    fabrication,
    dailyPrice,
    monthlyPrice,
    size,
    year,
  } = props;

  return (
    <BikeContainer>
      <BikeThumbnail>
        <img src={thumbnailSrc} />
      </BikeThumbnail>
      <BikeName>{name}</BikeName>
      <PricesContainer>
        <DailyPrice>
          {dailyPrice}
          <SmallText>/day</SmallText>{" "}
        </DailyPrice>
        <MonthlyPrice>
          {monthlyPrice}
          <SmallText>/month</SmallText>{" "}
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <BikeDetailsContainer>
        <BikeDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <BikeInfo>{fabrication}</BikeInfo>
        </BikeDetail>
        <BikeDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsis} />
          </SmallIcon>
          <BikeInfo>{size}</BikeInfo>
        </BikeDetail>
        <BikeDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <BikeInfo>{year}</BikeInfo>
        </BikeDetail>
      </BikeDetailsContainer>
      <RentButton className="className" text="Rent Now" />
    </BikeContainer>
  );
}

export default Bikes;
