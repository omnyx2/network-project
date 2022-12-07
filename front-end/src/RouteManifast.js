import React from "react";

import MapPage from "./pages/MapSubPages/MapPage.tsx";
import MapSearchPage from "./pages/MapSubPages/MapSearchPage.tsx";
import MapHistoryPage from "./pages/MapSubPages/MapHistoryPage.tsx";
import MapAsList from "./pages/MapSubPages/MapAsList.tsx";

import OrderStateAll from './pages/OrderSubPages/OrderStateAll'
import OrderStateWaitingPage from "./pages/OrderSubPages/OrderStateWaitingPage";
import OrderStateCookingPage from "./pages/OrderSubPages/OrderStateCookingPage";
import OrderStateFinishedPage from "./pages/OrderSubPages/OrderStateFinishedPage";
import OrderedListOfTodayPage from "./pages/OrderSubPages/OrderedListOfTodayPage";

import LocalBrandingMenuPage from "./pages/LocalBrandingPages/LocalBrandingMenuPage.tsx";
import LocalBrandStoryPage from "./pages/LocalBrandingPages/LocalBrandStoryPage.tsx";
import ShopInnerPicturePage from "./pages/LocalBrandingPages/ShopInnerPicturePage.tsx";
import ShopOuterPicturePage from "./pages/LocalBrandingPages/ShopOuterPicturePage.tsx";

import ShopWorkingInfoPage from "./pages/ShopInfoPages/ShopWorkingInfoPage.tsx";
import ShopInfoPage from './pages/ShopInfoPages/ShopInfoPage.tsx';
import ShopSalesInfoPage from './pages/ShopInfoPages/ShopSalesInfoPage.tsx';

import MyPage from "./pages/MyPageSubPages/MyPage.tsx";

import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from "@tabler/icons";

const EmptyComp = ({ title }) => {
  return <></>;
};
// 각 서브페이지는 동일한 헤더를 가진다
const firstNestSubPages = {
  mapSubPages: [
    {
      label: "지도보기",
      key: "map",
      link: "/map",
      component: <MapPage />,
    },
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
      component: <MapHistoryPage />,
    },
    {
      label: "리스트로 보기",
      key: "list",
      link: "/list",
      component: <MapAsList />,
    },
  ],
  orderSubPages: [
    {
      label: "주문 전체창",
      key: "state_all",
      link: "/state_all",
      component: <OrderStateAll />,
    },
    {
      label: "주문 접수 대기",
      key: "state_waiting",
      link: "/state_wating",
      component: <OrderStateWaitingPage />,
    },
    {
      label: "조리 중",
      key: "state_cooking",
      link: "/state_cooking",
      component: <OrderStateCookingPage />,
    },
    {
      label: "주문 완료",
      key: "state_done",
      link: "/state_done",
      component: <OrderStateFinishedPage />,
    },
    {
      label: "오늘 주문 내역",
      key: "state_diary",
      link: "/state_diary",
      component: <OrderedListOfTodayPage />,
    },
  ],
  localBrandingSubPages: [
    {
      label: "메뉴판 관리",
      key: "menu_board",
      link: "/menu_board",
      component: <LocalBrandingMenuPage />,
    },
    {
      label: "매장 내부 사진",
      key: "shop_in",
      link: "/shop_in",
      component: <ShopInnerPicturePage />,
    },
    {
      label: "매장 외부사진",
      key: "shop_out",
      link: "/shop_out",
      component: <ShopOuterPicturePage />,
    },
    {
      label: "매장 스토리",
      key: "shop_story",
      link: "/shop_story",
      component: <LocalBrandStoryPage />,
    },
  ],
  shopInfoPageSubPages: [
    {
      label: "매장 정보",
      key: "shop_info",
      link: "/shop_info",
      component: <ShopInfoPage />,
    },
    {
      label: "영업 정보",
      key: "working_info",
      link: "/working_info",
      component: <ShopWorkingInfoPage />,
    },
    {
      label: "매상 정보",
      key: "sales_info",
      link: "/sales_info",
      component: <ShopSalesInfoPage />,
    },
  ],
  myPageSubPages: [
    {
      label: "내꿈궈",
      key: "my_page",
      link: "/my_page",
      component: <MyPage/>,
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
    icon: IconHome2,
    label: "맵",
    keyLabel: "map",
    link: "/map",
    mainComponent: firstNestSubPages.mapSubPages[0].component,
    subPages: firstNestSubPages.mapSubPages,
  },
  order: {
    icon: IconGauge,
    label: "주문",
    keyLabel: "order",
    link: "/order",
    mainComponent: firstNestSubPages.orderSubPages[0].component,
    subPages: firstNestSubPages.orderSubPages,
  },
  localBranding: {
    icon: IconCalendarStats,
    label: "로컬 브랜딩",
    keyLabel: "local-branding",
    link: "/local-branding",
    mainComponent: firstNestSubPages.localBrandingSubPages[0].component,
    subPages: firstNestSubPages.localBrandingSubPages,
  },
  shopInfo: {
    icon: IconUser,
    label: "매장 정보",
    keyLabel: "shop-info",
    link: "/shop-info",
    mainComponent: firstNestSubPages.shopInfoPageSubPages[0].component,
    subPages: firstNestSubPages.shopInfoPageSubPages,
  },
  myPage: {
    icon: IconFingerprint,
    label: "마이 페이지",
    keyLabel: "mypage",
    link: "/mypage",
    mainComponent: firstNestSubPages.myPageSubPages[0].component,
    subPages: firstNestSubPages.myPageSubPages,
  },
  setting: {
    icon: IconSettings,
    label: "내 설정",
    keyLabel: "setting",
    link: "/setting",
    mainComponent: firstNestSubPages.settingSubPages[0].component,
    subPages: firstNestSubPages.settingSubPages,
  },
};

const makeMainRoutesListArray = () => {
  let newArray = [];
  for (const [key, value] of Object.entries(mainRoutesList)) {
    newArray.push(value);
  }

  return [...newArray];
};
export const mainRoutesListArray = makeMainRoutesListArray();
