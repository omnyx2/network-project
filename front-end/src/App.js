import logo from "./logo.svg";
import Router from "./Route";
import { DoubleNavbar } from "./components/SideBar/index";
import { mainRoutesList } from "./RouteManifast";
 import { Flex, Button, Box } from "@mantine/core";

 import { useRecoilState } from 'recoil';
import { mapActiveSubComponent } from './recoils/RecoilsList.tsx'
function App() {
  const [activeComponent, setActiveComponent] = useRecoilState(mapActiveSubComponent);
  return (
    <div className="App">

    <Flex style={{ width: "100wv", height: "100vh" }}>
        <Router>
          <DoubleNavbar style={{ height: "100vh" }} />
          { activeComponent }
        </Router>
    </Flex>
    </div>
  );
}

export default App;
