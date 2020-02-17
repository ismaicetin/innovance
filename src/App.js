import React from "react";
import { createBrowserHistory } from "history";
import { Route, Router } from "react-router-dom";
import "./app.css"
import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import AdminNavbar from "./components/Navbars/AdminNavbar";
import DefaultRoutes from "./Router/DefaultRoutes";
import LoginContext from "./context/LoginContext"
import { SnackbarProvider, useSnackbar } from 'notistack';

function App() {
    const hist = createBrowserHistory();
    const currentUser = sessionStorage.getItem("login");

    if (currentUser === undefined && window.location.pathname !== "/login") {
        window.location.href = '/login';
    }

    return (
        <div style={{ height: "100vh", overflow: "auto " }}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}>
                <LoginContext>
                    <Router history={hist}>
                        <AdminNavbar color="info" brandText="esai" />
                        <div style={{ width: "100%", minHeight: "80vh" }}>
                            <DefaultRoutes />
                        </div>
                    </Router>
                </LoginContext>
            </SnackbarProvider>
        </div>
    )

}


export default App