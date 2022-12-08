import React, { useEffect, useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { DropZoneButton } from "../../components/DropZone/DropZoneButton.tsx";
import { CarouselWithCardsAndForm } from "../../components/Carousels/CarouselWithCardsAndForm.tsx";
import { Container, Modal, Button, Group, Text } from "@mantine/core";
import SubmitFrom from "../../components/Forms/SubmitForm.tsx";
import { DragAndDropHeadList } from "../../components/DragAndDrop/DragAndDropHeadList.tsx";
import FullSizeContentLayout from "../../Layout/FullSizeContentLayout";
import HeaderForChangingWorks_1_1_1 from "../../Layout/HeaderForChangingWorks_1_1_1";
import { useRecoilState } from "recoil";
import { ShopinnerCardState } from "../../recoils/ShopInnerRecoil.tsx";
import { useListState } from "@mantine/hooks";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

function ShopInnerPicturePage() {
  const [value, onChange] = useState(initialValue);
  const [cardData, setCardData] = useRecoilState(ShopinnerCardState);
  useEffect(() => {}, [cardData]);

  const handleSetData = (value, idx) => {
    let newData = [...cardData];
    newData[idx] = value;
    console.log(cardData);
    setCardData(newData);
    console.log(cardData);
  };

  const handleReordering = ({ from, to }: { from: number; to: number }) =>
    setCardData((current) => {
      const cloned = [...current];
      const item = current[from];

      cloned.splice(from, 1);
      cloned.splice(to, 0, item);

      return cloned;
    });

  const onDeleteCardFromData = (idx) => {
    let newData = [...cardData];
    console.log(cardData);
    setCardData(newData.filter((value, index) => index !== idx));
    console.log(cardData);
  };

  return (
    <FullSizeContentLayout size="lg">
      <HeaderForChangingWorks_1_1_1
        CompOne={<Text size="sm">이미지 순서 변경</Text>}
        CompTwo={<Button size="sm">저장</Button>}
        CompThree={
          <DragAndDropHeadList
            cardData={cardData}
            reOrderCardData={handleReordering}
          />
        }
      />
      <CarouselWithCardsAndForm
        cardData={cardData}
        setCardData={handleSetData}
        deleteCardData={onDeleteCardFromData}
      />
    </FullSizeContentLayout>
  );
}

export default ShopInnerPicturePage;
