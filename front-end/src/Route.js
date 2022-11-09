import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mainRoutesList } from './RouteManifast' 

function Router({children}){
    return (
        <BrowserRouter>
          {children}
          <Routes>
            <Route path='/'  element={mainRoutesList.map.component}/>
            <Route path={mainRoutesList.map.link}  element={mainRoutesList.map.component}/>
            <Route path={mainRoutesList.order.link}  element={mainRoutesList.order.component}/>
            <Route path={mainRoutesList.localBranding.link}  element={mainRoutesList.localBranding.component}/>
            <Route path={mainRoutesList.shopInfo.link}  element={mainRoutesList.shopInfo.component}/>
            <Route path={mainRoutesList.myPage.link}  element={mainRoutesList.myPage.component}/>
            <Route path={mainRoutesList.setting.link}  element={mainRoutesList.setting.component}/>
          </Routes>
        </BrowserRouter>
    )
}

export default Router;