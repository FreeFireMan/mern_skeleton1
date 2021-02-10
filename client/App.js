import {hot} from "react-hot-loader";
import React from 'react';
import MainRouter from './MainRouter';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from './theme'

import Home from './core/Home'



const App = () =>{
    console.log(theme);
    return(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {/*<Home />*/}
                 <MainRouter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default hot(module)(App);
// export default hot(App);
