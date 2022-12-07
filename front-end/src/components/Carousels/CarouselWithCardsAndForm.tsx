import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Flex,
  Title,
  Group,
  Modal,
  Button,
  useMantineTheme,
  Container,
  ThemeIcon,
} from "@mantine/core";

import ShopInnerSubmitForm from '../Forms/ShopInnerSubmitForm.tsx'
import { IconTrash } from "@tabler/icons";
import { relative } from "node:path/win32";
const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  delete: {
    zIndex: 1000000,
    position: 'relative',
    top: 1,
    left: 14,
  }
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, article, category, children }: CardProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false)
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
      
        <Text className={classes.category} size="xs">
            {category}    
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        
      </div>
      <Group position="center">
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title={category}
        >
          { article }
        </Modal>
      </Group>
      <Flex>
      <Button variant="white" color="dark" onClick={() => setOpened(true)}>
          Read article
      </Button>
      {children}
      </Flex>
      
      
      
    </Paper>
  );
}

export function CarouselWithCardsAndForm({cardData, setCardData, deleteCardData}) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  useEffect(()=> {

  },[cardData])
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = cardData?.map((item, idx) => (
    <Carousel.Slide key={item.title}>
     
      <Card {...item} >
        <ThemeIcon 
          className={classes.delete} 
          size="lg" 
          onClick={() => deleteCardData(idx)}
          variant="gradient" 
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
          <IconTrash size={20} /> 
        </ThemeIcon>
        </Card>
      <ShopInnerSubmitForm {...item} setRecoilData={(value)=> setCardData(value, idx)}/>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      dragFree={true}
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
