import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import { DropZoneButton } from '../../components/DropZone/DropZoneButton.tsx';
import { DragAndDropHeadList } from '../../components/DragAndDrop/DragAndDropHeadList.tsx';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function ShopOuterPicturePage() {
  const [value, onChange] = useState(initialValue);
  return <DropZoneButton/>;
}

export default ShopOuterPicturePage