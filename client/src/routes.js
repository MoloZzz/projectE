import { Component } from "react"
import { ADMIN_ROUTE, BOOKMARS_ROUTE, HISTORY_ROUTE, LIBRARY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Bookmars from "./pages/bookmarks"
import AdminPage from "./pages/AdminPage"
import Library from "./pages/Library"
import Auth from "./pages/Auth"
import HistoryPage from "./pages/HistoryPage"

export const authRoutes = [
    {
     path: ADMIN_ROUTE,
     Component: AdminPage
    },

    {
    path: BOOKMARS_ROUTE,
    Component: Bookmars
    }
]

export const publicRoutes = [
    {
     path: LIBRARY_ROUTE,
     Component: Library
    },
    
    {
    path: REGISTRATION_ROUTE,
    Component: Auth
    },
    
    {
    path: LOGIN_ROUTE,
    Component: Auth
    },
    
    {
    path: HISTORY_ROUTE,
    Component: HistoryPage
    }
]