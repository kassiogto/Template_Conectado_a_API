import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoutePrivate from './service/routerPrivate';
import { AuthProvider } from './contexts/auth';

import Painel from './pages/Painel/index';
import LoginAdmin from './pages/loginAdmin';
import Categoria from './pages/Categorias';
import novaCategoria from './pages/novasCategorias';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <Route path='/' exact component={ LoginAdmin } /> 
                    <RoutePrivate path='/painel' exact component={ Painel } />
                    <RoutePrivate path='/painel/categoria' exact component={ Categoria } />
                    <RoutePrivate path='/painel/categoria/new' component={ novaCategoria } />
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}