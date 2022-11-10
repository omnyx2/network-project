import MainPage from "./pages/MainPage.tsx";
import OrderPage from "./pages/OrderPage.tsx";
import ShopInfoPage from "./pages/ShopInfoPage.tsx";
import MyPage from "./pages/MyPage.tsx";
import LocalBrandingPage from "./pages/LocalBrandingPage.tsx";
import SettingPage from "./pages/SettingPage.tsx";



import MapPage from "./pages/MapSubPages/MapPage.tsx";
import MapSearchPage from "./pages/MapSubPages/SearchPage.tsx";
import OrderStateWaitingPage from "./pages/OrderSubPages/OrderStateWaitingPage.tsx";

import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from "@tabler/icons";


const EmptyComp = ({title}) => {
  return <></>;
};
// 각 서브페이지는 동일한 헤더를 가진다
const firstNestSubPages = {
  mapSubPages: [
    { label: "지도보기", key: "map", link: "/map", component: <MapPage /> },
    {
      label: "검색창",
      key: "search",
      link: "/search",
      component: <MapSearchPage />,
    },
    {
      label: "히스토리",
      key: "history",
      link: "/history",
      component: <EmptyComp title={"history"}/>,
    },
    {
      label: "리스트로 보기",
      key: "list",
      link: "/list",
      component: <EmptyComp />,
    },
  ],
  orderSubPages: [
    {
      label: "주문 접수 대기",
      key: "state_waiting",
      link: "/state_wating",
      component: <EmptyComp />,
    },
    {
      label: "조리 중",
      key: "state_cooking",
      link: "/state_cooking",
      component: <EmptyComp />,
    },
    {
      label: "주문 완료",
      key: "state_done",
      link: "/state_done",
      component: <EmptyComp />,
    },
    {
      label: "오늘 주문 내역",
      key: "state_diary",
      link: "/state_diary",
      component: <EmptyComp />,
    },
  ],
  localBrandingSubPages: [
    {
      label: "메뉴판 관리",
      key: "menu_board",
      link: "/menu_board",
      component: <EmptyComp />,
    },
    {
      label: "매장 내부 사진",
      key: "shop_in",
      link: "/shop_in",
      component: <EmptyComp />,
    },
    {
      label: "매장 외부사진",
      key: "shop_out",
      link: "/shop_out",
      component: <EmptyComp />,
    },
    {
      label: "매장 스토리",
      key: "shop_story",
      link: "/shop_story",
      component: <EmptyComp />,
    },
  ],
  shopInfoPageSubPages: [
    {
      label: "매장 정보",
      key: "shop_info",
      link: "/shop_info",
      component: <EmptyComp />,
    },
    {
      label: "영업 정보",
      key: "schedule_info",
      link: "/schedule_info",
      component: <EmptyComp />,
    },
    {
      label: "매상 정보",
      key: "earn_info",
      link: "/earn_info",
      component: <EmptyComp />,
    },
  ],
  myPageSubPages: [
    {
      label: "내꿈궈",
      key: "my_page",
      link: "/my_page",
      component: <EmptyComp />,
    },
  ],
  settingSubPages: [
    {
      label: "셋팅",
      key: "setting",
      link: "/setting",
      component: <EmptyComp />,
    },
  ],
};

export const mainRoutesList = {
  map: {
    label: "맵",
    icon: IconHome2,
    link: "/map",
    component: <MainPage />,
    subPages: firstNestSubPages.mapSubPages,
  },
  order: {
    label: "주문",
    icon: IconGauge,
    link: "/order",
    component: <OrderPage />,
    subPages: firstNestSubPages.orderSubPages,
  },
  localBranding: {
    label: "로컬 브랜딩",
    icon: IconUser,
    link: "/local-branding",
    component: <LocalBrandingPage />,
    subPages: firstNestSubPages.localBrandingSubPages,
  },
  shopInfo: {
    label: "매장 정보",
    icon: IconFingerprint,
    link: "/shop-info",
    component: <ShopInfoPage />,
    subPages: firstNestSubPages.shopInfoPageSubPages,
  },
  myPage: {
    label: "마이 페이지",
    icon: IconCalendarStats,
    link: "/mypage",
    component: <MyPage />,
    subPages: firstNestSubPages.myPageSubPages,
  },
  setting: {
    label: "내 설정",
    icon: IconSettings,
    link: "/setting",
    component: <SettingPage />,
    subPages: firstNestSubPages.settingSubPages,
  },
};
