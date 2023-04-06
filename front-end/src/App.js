import logo from "./logo.svg";
import Router from "./Route";
import { DoubleNavbar } from "./components/SideBar/index";
import { mainRoutesList } from "./RouteManifast";
import { Flex, Button, Box } from "@mantine/core";
import { useRecoilState } from "recoil";
import { mainActiveSubComponent } from "./recoils/RecoilsList.tsx";

import AuthPage from "./pages/LoginPage/LoginPage.tsx";
import { authComponent } from "./pages/LoginPage/LoginRecoil.tsx";
import { useEffect } from "react";

//Components를 미리 기억하게 만들고 실행중에 컴포넌트를 교체하는 형식이다. 따라서 메인 컴포넌트를 지정해야 한다.

function App() {
  const [activeComponent, setActiveComponent] = useRecoilState(
    mainActiveSubComponent
  );
  const [isAuth, setAuthComponent] = useRecoilState(authComponent);
  // setActiveComponent 로초기 컴포넌트 지정
  useEffect(() => {
    //    setAuthComponent(false);
    setActiveComponent(mainRoutesList.order.mainComponent);
  });

  return (
    <div className="App" style={{ width: "100wv", height: "100vh" }}>
      {isAuth ? (
        <Flex style={{ width: "100%", height: "100%" }}>
          <Router>
            <DoubleNavbar />
          </Router>
        </Flex>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
