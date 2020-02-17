import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom"; 
import React,  {useState} from "react";

import Buttons from "./views/Components/Buttons.js";
// import CalendarPage from "./views/Calendar/Calendar.js";
// import ChartsPage from "./views/Charts/Charts.js";
import DashboardPage from "./views/Dashboard/Dashboard";
// import ErrorPage from "./views/Pages/ErrorPage.js";
// import ExtendedFormsPage from "./views/Forms/ExtendedForms.js";
// import ExtendedTablesPage from "./views/Tables/ExtendedTables.js";
 import FullScreenMapPage from "./views/Maps/FullScreenMap.js";
// import GoogleMapsPage from "./views/Maps/GoogleMaps.js";
// import GridSystemPage from "./views/Components/GridSystem.js";
// import IconsPage from "./views/Components/Icons.js";
// import LockScreenPage from "./views/Pages/LockScreenPage.js";
import LoginPage from "./views/Pages/LoginPage.js";
import AboutPage from "./views/Pages/AboutPage.js";
import PacketPage from "./views/Pages/PacketPage.js";

// import NotificationsPage from "./views/Components/Notifications.js";
// import PanelsPage from "./views/Components/Panels.js";
// import PricingPage from "./views/Pages/PricingPage.js";
// import RTLSupportPage from "./views/Pages/RTLSupport.js";
// import ReactTablesPage from "./views/Tables/ReactTables.js";
// import RegisterPage from "./views/Pages/RegisterPage.js";
// import RegularFormsPage from "./views/Forms/RegularForms.js";
// import RegularTablesPage from "./views/Tables/RegularTables.js";
// import SweetAlertPage from "./views/Components/SweetAlert.js";
// import TimelinePage from "./views/Pages/Timeline.js";
import TypographyPage from "./views/Components/Typography.js";
import UserProfilePage from "./views/Pages/UserProfile.js";
import ValidationFormsPage from "./views/Forms/ValidationForms.js";
//import VectorMapPage from "./views/Maps/VectorMap.js";
// import WidgetsPage from "./views/Widgets/Widgets.js";
import WizardPage from "./views/Forms/Wizard.js";


// @material-ui/icons
// import Apps from "@material-ui/icons/Apps";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import DateRange from "@material-ui/icons/DateRange";
// import GridOn from "@material-ui/icons/GridOn";
// import Image from "@material-ui/icons/Image";
// import Place from "@material-ui/icons/Place";
// import Timeline from "@material-ui/icons/Timeline";
// import WidgetsIcon from "@material-ui/icons/Widgets";

function Routes() {

    return ( 

        <Switch >
			<Route path="/map" component={FullScreenMapPage} />
            <Route path="/packet" component={PacketPage} />
            <Route path="/dashboard" component={DashboardPage} />
            {/* <Route path="/hakkimizda" component={DashboardPage} /> */}
             
            <Route path="/" component={FullScreenMapPage} />
            
           {/*  <Route path="/admin" component={DashboardPage} /> */}
        </Switch>

    )

}


export default Routes;
