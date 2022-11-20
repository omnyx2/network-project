import React, { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { DropZoneButton } from "../../components/DropZone/DropZoneButton.tsx";
import { CardsCarousel } from "../../components/Carousels/CarouselWithCards.tsx";
import { Container, Modal, Button, Group } from "@mantine/core";
const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

function ShopInnerPicturePage() {
  const [opened, setOpened] = useState(false);
  const [value, onChange] = useState(initialValue);
  return (
    <Container size="lg">
      <CardsCarousel />;
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </Container>
  );
}

export default ShopInnerPicturePage;
