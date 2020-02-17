import { Route, Switch } from "react-router-dom"; 
import React from "react";

// import Buttons from "../views/Ornekler/Components/Buttons.js";
// import CalendarPage from "../views/Calendar/Calendar.js";
// import ChartsPage from "../views/Charts/Charts.js";
//  import DashboardPage from "../views/Ornekler/Dashboard/Dashboard"
// import PacketPage from "../views/Pages/PacketPage.js";
// import FullScreenMapPage from "../views/Maps/FullScreenMap.js";
// import ErrorPage from "../views/Pages/ErrorPage.js";
// import ExtendedFormsPage from "../views/Forms/ExtendedForms.js";
// import ExtendedTablesPage from "../views/Tables/ExtendedTables.js";
// import FullScreenMapPage from "../views/Maps/FullScreenMap.js";
// import GoogleMapsPage from "../views/Maps/GoogleMaps.js";
// import GridSystemPage from "../views/Ornekler/Components/GridSystem.js";
// import IconsPage from "../views/Ornekler/Components/Icons.js";
// import LockScreenPage from "../views/Pages/LockScreenPage.js";
 
// import FullScreenMap from "../views/Maps/FullScreenMap.js";

// import NotificationsPage from "../views/Ornekler/Components/Notifications.js";
// import PanelsPage from "../views/Ornekler/Components/Panels.js";
// import PricingPage from "../views/Pages/PricingPage.js";
// import RTLSupportPage from "../views/Pages/RTLSupport.js";
// import ReactTablesPage from "../views/Tables/ReactTables.js";
// import RegisterPage from "../views/Pages/RegisterPage.js";
// import RegularFormsPage from "../views/Forms/RegularForms.js";
// import RegularTablesPage from "../views/Tables/RegularTables.js";
// import SweetAlertPage from "../views/Ornekler/Components/SweetAlert.js";
// import TimelinePage from "../views/Pages/Timeline.js";
// import TypographyPage from "../views/Ornekler/Components/Typography.js";
// import UserProfilePage from "../views/Pages/UserProfile.js";
// import ValidationFormsPage from "../views/Forms/ValidationForms.js";
// import VectorMapPage from "../views/Maps/VectorMap.js";
// import WidgetsPage from "../views/Widgets/Widgets.js";
// import WizardPage from "../views/Forms/Wizard.js";


// @material-ui/icons
// import Apps from "@material-ui/icons/Apps";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import DateRange from "@material-ui/icons/DateRange";
// import GridOn from "@material-ui/icons/GridOn";
// import Image from "@material-ui/icons/Image";
// import Place from "@material-ui/icons/Place";
// import Timeline from "@material-ui/icons/Timeline";
// import WidgetsIcon from "@material-ui/icons/Widgets";
// import AboutPage from "../views/Pages/AboutPage.js";

// import HaritaPage1 from "../views/Restaurant/_HaritaPage1";
import HomePage from "../views/Default/HomePage"; 

import LoginPage from "../views/Default/LoginPage.js";
import ErrorPage from "../views/Default/ErrorPage";
function Routes() {

    return ( 

        <Switch >
            {/* <Route exact path="/" component={HaritaPage1} />  */}
            <Route exact path="/" component={HomePage} /> 
         
            <Route path="/login" component={LoginPage} />
             
            <Route path="*"  component={ErrorPage} /> 

           {/*  <Route path="/admin" component={DashboardPage} /> */}
        </Switch>

    )

}


export default Routes;
