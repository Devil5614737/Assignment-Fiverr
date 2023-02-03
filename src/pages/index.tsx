import React from "react";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/Card";
import * as HomeStyles from "@/styles/HomeStyles";
import { dogs } from "@/data/dummyDogData";

function Home() {
  // Destructure the styles for the CardContainer and Header components from the HomeStyles object.
  const { CardContainer, Header } = HomeStyles;

  return (
    // Use a Fragment to return multiple elements without adding extra markup.
    <>
      {/* Render the Header component with the Navbar component inside. */}
      <Header>
        <Navbar />
      </Header>
      <main>
        {/* Render the main content inside the Container component. */}
        <Container>
          <CardContainer>
            {/* Generate the list of cards from the dummy dog data and render each card with the Card component. */}
            {dogs.map((dog, index) => (
              <Card key={index} dog={dog} />
            ))}
          </CardContainer>
        </Container>
      </main>
    </>
  );
}

export default Home;
