import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import GridLayout_2_1 from '../../Layout/GridLayout_2_1';
import ToastEditor from '../../components/Editor/ToastEditor';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function LocalBrandStoryPage() {
  const [value, onChange] = useState(initialValue);
 
  
  return (<>
    <ToastEditor />
  {/* <GridLayout_2_1 
    CompOne={<ToastEditor />}
    CompTwo />*/ } 
    </>)
}

export default LocalBrandStoryPage