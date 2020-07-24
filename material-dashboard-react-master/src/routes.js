 
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import RoomService from "@material-ui/icons/RoomService"
import LiveHelp from "@material-ui/icons/LiveHelp"
import Security from "@material-ui/icons/Security"
import Book from "@material-ui/icons/Book"
import AllInbox from "@material-ui/icons/AllInbox"
import BurstMode from "@material-ui/icons/BurstMode"
import Category from "@material-ui/icons/Category"
import {AccountCircle, SettingsApplications, Work, Shop,LocalOffer,MonetizationOn  } from '@material-ui/icons'
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Services from "views/Services/Services";
import Items from "views/Items/Items.js";
import CategoryClass from "views/Category/CategoryClass";
import Slider from "views/Slider/Slider";
import Blogs from "views/Blogs/Blogs";
import Terms from "views/Terms/Terms";
import Privacy from "views/Privacy/Privacy";
import FAQ from "views/FAQ/FAQ";
import Offers from "views/Offers/Offers";
import Settings from "views/Settings/Settings";
import Login from "views/Login/Login";
import DeliveryCharge from "views/DeliveryCharge/DeliveryCharge";
import Orders from "views/Orders/Orders";
import Users from "views/Users/Users";


// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

// const dashboardRoutes = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     rtlName: "لوحة القيادة",
//     icon: Dashboard,
//     component: DashboardPage,
//     layout: "/admin"
//   },
//   {
//     path: "/user",
//     name: "User Profile",
//     rtlName: "ملف تعريفي للمستخدم",
//     icon: Person,
//     component: UserProfile,
//     layout: "/admin"
//   },
//   {
//     path: "/table",
//     name: "Table List",
//     rtlName: "قائمة الجدول",
//     icon: "content_paste",
//     component: TableList,
//     layout: "/admin"
//   },
//   {
//     path: "/typography",
//     name: "Typography",
//     rtlName: "طباعة",
//     icon: LibraryBooks,
//     component: Typography,
//     layout: "/admin"
//   },
//   {
//     path: "/icons",
//     name: "Icons",
//     rtlName: "الرموز",
//     icon: BubbleChart,
//     component: Icons,
//     layout: "/admin"
//   },
//   {
//     path: "/maps",
//     name: "Maps",
//     rtlName: "خرائط",
//     icon: LocationOn,
//     component: Maps,
//     layout: "/admin"
//   },
//   {
//     path: "/notifications",
//     name: "Notifications",
//     rtlName: "إخطارات",
//     icon: Notifications,
//     component: NotificationsPage,
//     layout: "/admin"
//   },
//   {
//     path: "/rtl-page",
//     name: "RTL Support",
//     rtlName: "پشتیبانی از راست به چپ",
//     icon: Language,
//     component: RTLPage,
//     layout: "/rtl"
//   },
//   {
//     path: "/upgrade-to-pro",
//     name: "Upgrade To PRO",
//     rtlName: "التطور للاحترافية",
//     icon: Unarchive,
//     component: UpgradeToPro,
//     layout: "/admin"
//   }
// ];


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: AccountCircle,
    component: Users,
    layout: "/admin"
  },
  {
    path: "/services",
    name: "Services",
    icon: Work,
    component: Services,
    layout: "/admin"
  },
  {
    path: "/category",
    name: "Category",
    icon: Category,
    component: CategoryClass,
    layout: "/admin"
  },
  {
    path: "/items",
    name: "Items",
    icon: AllInbox,
    component: Items,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: Shop,
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/slider",
    name: "Slider",
    icon: BurstMode,
    component: Slider,
    layout: "/admin"
  },
  {
    path: "/blogs",
    name: "Blogs",
    icon: Book,
    component: Blogs,
    layout: "/admin"
  },
  {
    path: "/offers",
    name: "Offers",
    icon: LocalOffer,
    component: Offers,
    layout: "/admin"
  },
  {
    path: "/deliveryCharge",
    name: "Delivery Charges",
    icon: MonetizationOn,
    component: DeliveryCharge,
    layout: "/admin"
  },

    {
      path: "/faq",
      name: "FAQ",
      icon: LiveHelp,
      component: FAQ,
      layout: "/admin"
    },
    {
      path: "/privacy",
      name: "Privacy Policy",
      icon: Security,
      component: Privacy,
      layout: "/admin"
    },
    {
      path: "/terms",
      name: "Terms & Condition",
      icon: Book,
      component: Terms,
      layout: "/admin"
    },
 
    {
      path: "/setting",
      name: "Settings",
      icon: SettingsApplications,
      component: Settings,
      layout: "/admin"
    }

  
    
  
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  
 
];

export default dashboardRoutes;
