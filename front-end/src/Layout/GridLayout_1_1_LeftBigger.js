import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = 300;

function isEmptyComp(comp) {
  console.log(comp);
  if (comp !== undefined) return comp;
  else
    return <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />;
}

function GridLayout_1_1_LeftBigger({ CompOne, CompTwo }) {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <div style={{display: 'flex', width: "100%", height: "100%", paddind: 0}}>
      <div style={{width: "auto", height: '100vh', display: 'block', overflowHiddenY: "hidden"}}>
        {isEmptyComp(CompOne)}
      </div>
      <div style={{width: "300px", height: '100vh', display: 'block', overflowHiddenY: "hidden"}}>
        {isEmptyComp(CompTwo)}
      </div>
      
    </div>
  );
}
export default GridLayout_1_1_LeftBigger;
