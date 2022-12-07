import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code, Group, Modal } from '@mantine/core';
import { useRecoilState } from "recoil";
import { DropZoneImg } from '../../components/DropZone/DropZoneImg.tsx';
import { ShopinnerCardState } from '../../recoils/ShopInnerRecoil.tsx'


function ShopInnerSubmitForm({image, title, article, category, setRecoilData, children}) {
  const [submittedValues, setSubmittedValues] = useState('');
  const [opened, setOpened] = useState(false)

  const form = useForm({
    initialValues: {
      image: image,
      title: title,
      article: article,
      category: category,
    },

    transformValues: (values) => ({
      image: values.image,
      title: values.title,
      article: values.article,
      category: values.category,
    }),
  });

  
  const handleChangeSave = (values) => {
    setRecoilData(values)
  }

  return (
    <Box sx={{ maxWidth: 400, textAlign: 'left', }} mx="0" position='left'>
      <form
        onSubmit={form.onSubmit((values) => handleChangeSave(values))}
      >
        <TextInput
          label="Title"
          placeholder="Title"
          {...form.getInputProps('title')}
        />
        <TextInput
          label="Article"
          placeholder="Article"
          mt="md"
          {...form.getInputProps('article')}
        />
        <TextInput
          // type="Category"
          label="Category"
          placeholder="Category"
          mt="md"
          {...form.getInputProps('category')}
        />
        
        <Group position="left">
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title={category}
          >
            <DropZoneImg/>
          </Modal>
          <Button type="submit" mt="md">
            저장
          </Button>
          <Button mt="md" onClick={() => setOpened(true)}>
            이미지 변경
          </Button>
        </Group>
        

      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}

export default ShopInnerSubmitForm;