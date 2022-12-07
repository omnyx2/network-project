import { Group, Text, Image, useMantineTheme, Button } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react'
import axios from 'axios';

export function DropZoneImg(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();
  const [files, setFiles] = useState<FileWithPath[]>(undefined);
  const [loader, setLoader] = useState(false)
  const [active, setActive] = useState(false);
 

  const previews = files?.map((file, index) => {
    
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    )
  });

  const handleSendImage = async () => {
    await axios({
      method: 'post',
      url: '/api/files/images',
      data: files,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
   
    setLoader(false)
  }
  const sendingFormat = (
      <div>
        { previews }
        <Button mt='md' onClick={() => handleSendImage(files)}>
          이미지 전송
        </Button>
      </div>
    )
   


  return (<>{ 
    files === undefined ?
    (<Dropzone
      onDrop={ setFiles }
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      loading = {loader}
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            size={50} 
            stroke={1.5}
            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size={50}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size={50} stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>)
    : sendingFormat
}</>)
  
}