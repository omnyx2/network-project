import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';

const PRIMARY_COL_HEIGHT = 300;


function isEmptyComp (comp) {
    if(comp !==undefined) return comp
    else return <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
}


export default function LeadGrid({CompOne, CompTwo}) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  
  return (
    <Container my="md">
      <Grid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <Grid.Col xs={4}>
            { isEmptyComp(CompOne) }
          </Grid.Col>
          <Grid.Col xs={4}>
            { isEmptyComp(CompOne) }
          </Grid.Col>
        </Grid>
      </Container>
  );
}