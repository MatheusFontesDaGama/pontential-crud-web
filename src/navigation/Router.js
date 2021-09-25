import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/Home";
import CadastroPage from "../pages/Cadastro";
import EdicaoPage from "../pages/Edicao";

const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/cadastro" component={CadastroPage} />
                <Route exact path="/edicao/:id" name="edicao" component={EdicaoPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterConfig
