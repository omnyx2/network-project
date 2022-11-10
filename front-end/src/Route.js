import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mainRoutesList } from "./RouteManifast";

let instance = null;
class SubPageRoutesSingleTon{
  static instance;
 
  constructor(){
    if(instance) return instance;
    this.mapSubPages = this.genSubPages(mainRoutesList.map.subPages);
    this.orderSubPages = this.genSubPages(mainRoutesList.order.subPages);
    this.localBrandingSubPages = this.genSubPages(
      mainRoutesList.localBranding.subPages
    );
    this.shopInfoSubPages = this.genSubPages(mainRoutesList.localBranding.subPages);
    this.myPageSubPages = this.genSubPages(mainRoutesList.shopInfo.subPages);
    this.settingSubPages = this.genSubPages(mainRoutesList.setting.subPages);
    instance = this;
  }

  subPages () {
    return { 
      mapSubPages: this.mapSubPages, 
      orderSubPages: this.orderSubPages, 
      localBrandingSubPages: this.localBrandingSubPages, 
      shopInfoSubPages: this.shopInfoSubPages, 
      myPageSubPages: this.myPageSubPages, 
      settingSubPages: this.settingSubPages
    }
  }

  genSubPages(arraySubPages) {
    return arraySubPages.map((e) => {
      <Route path={e.link} element={e.component} />;
    });
  }
}

function Router({ children }) {
  const subPages = new SubPageRoutesSingleTon();
  
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={mainRoutesList.map.component} />
        <Route
          path={mainRoutesList.map.link}
          element={mainRoutesList.map.component}
        />
        {subPages.mapSubPages}
        <Route
          path={mainRoutesList.order.link}
          element={mainRoutesList.order.component}
        />
        <Route
          path={mainRoutesList.localBranding.link}
          element={mainRoutesList.localBranding.component}
        />
        <Route
          path={mainRoutesList.shopInfo.link}
          element={mainRoutesList.shopInfo.component}
        />
        <Route
          path={mainRoutesList.myPage.link}
          element={mainRoutesList.myPage.component}
        />
        <Route
          path={mainRoutesList.setting.link}
          element={mainRoutesList.setting.component}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
