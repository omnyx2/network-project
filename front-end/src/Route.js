import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mainRoutesList } from "./RouteManifast";

let instance = null;
class SubPageRoutesSingleTon {
  constructor() {
    if (instance) return instance;
    // this.mapSubPages = this.genSubPages(mainRoutesList, "map");
    this.orderSubPages = this.genSubPages(mainRoutesList, "order");
    this.localBrandingSubPages = this.genSubPages(
      mainRoutesList,
      "localBranding"
    );
    this.shopInfoSubPages = this.genSubPages(mainRoutesList, "shopInfo");
    this.myPageSubPages = this.genSubPages(mainRoutesList, "myPage");
    this.settingSubPages = this.genSubPages(mainRoutesList, "setting");
    instance = this;
  }

  subPages() {
    return {
      //  mapSubPages: this.mapSubPages,
      orderSubPages: this.orderSubPages,
      localBrandingSubPages: this.localBrandingSubPages,
      shopInfoSubPages: this.shopInfoSubPages,
      myPageSubPages: this.myPageSubPages,
      settingSubPages: this.settingSubPages,
    };
  }

  genSubPages(mainRouteDict, keyOfDict) {
    let arraySubPages = mainRouteDict[keyOfDict].subPages;

    return arraySubPages.map((e, idx) => (
      <Route
        path={mainRouteDict[keyOfDict].link + e.link}
        element={e.component}
        key={mainRouteDict[keyOfDict].link + e.link}
      />
    ));
  }
}

function Router({ children }) {
  const subPagesSingleTon = new SubPageRoutesSingleTon();
  const subPages = subPagesSingleTon.subPages();
  console.log(subPages);
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {/* {subPages?.mapSubPages} */}
        {subPages?.orderSubPages}
        {subPages?.localBrandingSubPages}
        {subPages?.shopInfoSubPages}
        {subPages?.myPageSubPages}
        {subPages?.settingSubPages}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
