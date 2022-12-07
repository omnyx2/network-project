import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';
import { useRecoilState } from "recoil";
import { ShopinnerCardState } from '../../recoils/ShopInnerRecoil.tsx'

function Demo({title, article, data, idx, setData}) {
  const [submittedValues, setSubmittedValues] = useState('');
  const form = useForm({
    initialValues: {
      title: title,
      article: article,
      age: '33',
    },

    transformValues: (values) => ({
      fullName: `${values.title} ${values.article}`,
      age: Number(values.age) || 0,
    }),
  });

  console.log(title,article)

  const handleChangeSave = (values) => {
    console.log(values)
    data[idx] = {...data[idx], ...values}
    setData([...data])
    setSubmittedValues(JSON.stringify(values, null, 2))
  }

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => handleChangeSave(JSON.stringify(values, null, 2)))}
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
          type="number"
          label="Age"
          placeholder="Age"
          mt="md"
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="md">
          저장
        </Button>
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}

export default Demo;