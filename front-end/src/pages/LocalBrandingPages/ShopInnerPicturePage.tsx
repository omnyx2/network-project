import React, { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { DropZoneButton } from "../../components/DropZone/DropZoneButton.tsx";
import { CardsCarousel } from "../../components/Carousels/CarouselWithCards.tsx";
import { Container } from "@mantine/core";
const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

function ShopInnerPicturePage() {
  const [value, onChange] = useState(initialValue);
  return (
    <Container size="lg">
      <CardsCarousel />;
    </Container>
  );
}

export default ShopInnerPicturePage;
