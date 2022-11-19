import { KakaoMap } from "../../components/Maps/KakaoMap.tsx";
import GridLayout_2_1 from "../../Layout/GridLayout_2_1";
import { DndList } from "../../components/DragAndDrop.tsx";
import { StatsControls } from "../../components/Orderlists.tsx";

function OrderStateCookingPage() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <GridLayout_2_1 CompOne={<StatsControls />} CompTwo={<StatsControls />} />
    </div>
  );
}

export default OrderStateCookingPage;
