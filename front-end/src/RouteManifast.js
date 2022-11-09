import MainPage from "./pages/MainPage.tsx";
import OrderPage from './pages/OrderPage.tsx';
import ShopInfoPage from './pages/ShopInfo.tsx';
import MyPage from "./pages/MyPage.tsx";
import LocalBrandingPage from "./pages/LocalBrandingPage.tsx";
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
  } from '@tabler/icons';

const firstNestSubPages ={
    mapSubPages:[
        '접수대기',
        '처리중',
        '접수&처리',
        '완료',
        '주문조회'
    ],
    orderSubPages: [
        '접수대기',
        '처리중',
        '접수&처리',
        '완료',
        '주문조회'
    ],
    localBrandingSubPages: [
      '메뉴판 관리',
      '매장 내부 사진',
      '매장 외부사진',    
    ],
    shopInfoPageSubPages:[
        
    ],
    myPageSubPages: [

    ],
    settingSubPages: [

    ]
}

export const mainRoutesList = {   
    "map":{
        "label": "맵",
        "icon": IconHome2,
        "link": "/map",
        "component": <MainPage />,
        "subPages": firstNestSubPages.mapSubPages
    },
    "order":{
        "label": "주문",
        "icon": IconGauge,
        "link": "/order",
        "component": <OrderPage />,
        "subPages": firstNestSubPages.orderSubPages
    },
    "localBranding":{
        "label": "로컬 브랜딩",
        "icon": IconUser,
        "link": "/local-branding",
        "component": <OrderPage />,
        "subPages": firstNestSubPages.localBrandingSubPages
    },
    "shopInfo":{
        "label": "매장 정보",
        "icon": IconFingerprint,
        "link": "/shop-info",
        "component":  <ShopInfoPage />,
        "subPages": firstNestSubPages.shopInfoPageSubPages
    },
    "myPage":{
        "label": "마이 페이지",
        "icon": IconCalendarStats,
        "link": "/mypage",
        "component": <MyPage />,
        "subPages": firstNestSubPages.myPageSubPages
    },
    "setting":{
        "label": "내 설정",
        "icon": IconSettings,
        "link": "/setting",
        "component": <MyPage />,
        "subPages": firstNestSubPages.settingSubPages
    }
}


