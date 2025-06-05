export interface sidebarData {
    tittle: string;
    hasSubRoute: boolean;
    icon: string;
    showSubRoute: boolean;
    route: string;
    activeRoute: string;
    subRoutes: sidebarData[];
  }
  export interface url {
    url: string;
  }
  export interface sidebarDataone {
    tittle: string;
    showAsTab: boolean;
    separateRoute: boolean;
    menu: menu[];
  }
  export interface menu {
    menuValue: string;
    route: string;
    hasSubRoute: boolean;
    showSubRoute: boolean;
    icon: string;
    base?: string;
    page: string
    subMenus: subMenus[];
  }
  export interface subMenus {
    showSubRoute?: boolean;
    menuValue: string;
    route:string;
   
   
  }
  export interface MenuItem {
    hasSubRoute: boolean;
    hasSubRouteTwo: boolean;
    menuValue: string;
    showSubRoute: boolean;
    menu: SubMenu[];
  }
  
  export interface SubMenu {
    menuValue: string;
    showSubRoute: boolean;
   
  }
  