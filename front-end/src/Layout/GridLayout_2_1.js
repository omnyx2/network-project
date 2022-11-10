import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';

const PRIMARY_COL_HEIGHT = 300;


function isEmptyComp (comp) {
    console.log(comp)
    if(comp !== undefined ) return comp
    else return <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
}


function LeadGrid({CompOne, CompTwo}) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  
  return (
    <Container>
      <Grid col={2} spacing="md">
          <Grid.Col >
           <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          
          <Grid.Col >
            { isEmptyComp(CompTwo) }
          </Grid.Col>
        </Grid>
      </Container>
  );
}
export default LeadGrid