import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = 300;

function isEmptyComp(comp) {

  if (comp !== undefined) return comp;
  else
    return <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />;
}

function HeaderForChangingWorks_1_1_1({ CompOne, CompTwo, CompThree }) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container>
      <Grid>
        <Grid.Col span="content">
          <div style={{paddingBottom: 10 }}>
          {isEmptyComp(CompOne)}
          </div>
          <div style={{width: '100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
          {isEmptyComp(CompTwo)}
          </div>          
        </Grid.Col>
        <Grid.Col span={4}>{isEmptyComp(CompThree)}</Grid.Col>
      </Grid>
    </Container>
  );
}
export default HeaderForChangingWorks_1_1_1;
