import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import { DropZoneButton } from '../../components/DropZone/DropZoneButton.tsx';
const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function ShopInnerPicturePage() {
  const [value, onChange] = useState(initialValue);
  return <DropZoneButton/>;
}

export default ShopInnerPicturePage