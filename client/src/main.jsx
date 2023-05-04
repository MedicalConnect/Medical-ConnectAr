import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import store from "./redux/store.js"
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <Auth0Provider
    domain="dev-13esexcy6inoyg47.us.auth0.com"
    clientId="R5gntSyLJZT0HTyoxf8bUU569oteNZYf"
    authorizationParams={{
      redirect_uri: "http://127.0.0.1:5173/ingresopaciente"
    }}
    cacheLocation="localstorage">
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </Auth0Provider>,
   </Provider>
)
