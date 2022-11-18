import { mainActiveComponent } from "../recoils/RecoilsList";

// 생성시 받는 것 초기의 메인 Pages와 nav와 여러개의 하위 SubPages들
class SubRouteNavRecoder{
    constructor({main, subPages}){
        this.mainPage = pages.main
        this.subPages = pages.subPages
        this.subMainPageIdx = 0
        this.subMainPage = this.subPages[this.subMainPageIdx]
        
    }

    changeCurrentNavRecodeWithIdx(main, subIdx){
        if (this.mainPage === main) {
            this.subMainPageIdx = subIdx
            this.subMainPage = this.subPages[this.subMainPageIdx]
        }
    }
    changeCurrentNavRecodeWithLabel(main, Label){
        if (this.mainPage === main) {
            this.subMainPageIdx = this.subPages.findIndex(Label)
            this.subMainPage = this.subPages[this.subMainPageIdx]
        }
    }
    getMainPage() {
        return this.subMainPage 
    }
    getMainPageIdx() {
        return  this.subMainPageIdx
    }
    seekNav() {
        return this
    }

    static factory(mainPage){
        if(mainPage === "맵"){
           return new OrderRouter();
        }else if(mainPage === "주문"){
           return new OrderRouter();
        }else if(mainPage === "로컬 브랜딩"){
            return new LocalBrandingRouter();
         }else if(mainPage === "매장 정보"){
            return new ShopInfoRouter();
         }else if(mainPage === "마이 페이지"){
            return new MyPageRouter();
         }else if(mainPage === "내 설정"){
            return new SettingRouter();
         }
    }
}

class MapRoute extends SubRouteNavRecoder{
    constructor() {
        super({
            main: mainActiveComponent.map.label, 
            subPages: mainActiveComponent.map.subPages
        })
    }
}
class OrderRoute extends SubRouteNavRecoder{
    constructor() {
        super({
            main: mainActiveComponent.order.label, 
            subPages: mainActiveComponent.order.subPages
        })
    }
}
class LocalBrandingRoute extends SubRouteNavRecoder{
    constructor() {
        super({
            main: mainActiveComponent.localBranding.label, 
            subPages: mainActiveComponent.localBranding.subPages
        })
    }
}
class ShopInfoRoute extends SubRouteNavRecoder{
    constructor() {
        super({
            main: mainActiveComponent.shopInfo.label, 
            subPages: mainActiveComponent.shopInfo.subPages
        })
    }
}
class MyPageRoute extends SubRouteNavRecoder{
    constructor() {
        super({
            main: mainActiveComponent.myPage.label, 
            subPages: mainActiveComponent.myPage.subPages
        })
    }
}
class SettingRoute extends SubRouteNavRecoder{
    constructor() {
        super({
            main: mainActiveComponent.setting.label, 
            subPages: mainActiveComponent.setting.subPages
        })
    }
}
const pageRouteList = {
    mapRoute: SubRouteNavRecoder.factory("맵"),
    orderRoute: SubRouteNavRecoder.factory("주문"),
    localBrandingRoute: SubRouteNavRecoder.factory("로컬 브랜딩"),
    shopInfoRoute: SubRouteNavRecoder.factory("매장 정보"),
    myPageRoute: SubRouteNavRecoder.factory("마이 페이지"),
    settingRoute: SubRouteNavRecoder.factory("내설정"),
}
export default pageRouteList 
        
