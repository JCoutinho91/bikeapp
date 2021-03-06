import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/BookCard";
import Footer from "../../components/Footer";
import { Marginer } from "../../components/marginer";
import NavBar from "../../components/NavBar";
import AboutUs from "./AboutUs";
import BookingSteps from "./BookingSteps";
import TopBikes from "./TopBikes";
import TopSection from "./TopSection";

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;
export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="5em" />
      <AboutUs />
      <Marginer direction="vertical" margin="5em" />
      <TopBikes />
      <Footer />
    </PageContainer>
  );
}
