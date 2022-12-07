import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  Group,
  Modal,
  useMantineTheme,
} from "@mantine/core";
import { useRecoilState } from "recoil";
import { ShopinnerCardState } from '../../recoils/ShopInnerRecoil.tsx'
import ShopInnerSubmitForm from '../../components/Forms/ShopInnerSubmitForm.tsx'


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
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
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
      
  
        
    </Paper>
  );
}

 
export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const [data, setData] = useRecoilState(ShopinnerCardState)
  useEffect(()=> {
    
  },[cardData])
  
  const slides = data?.map((item, idx) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
      <ShopInnerSubmitForm {...item} setData={() => setData}/>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      initialSlide={4}

      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
