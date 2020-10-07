import React, { Component, Fragment } from "react";
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';

import theme from './theme'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Header/>
          <Home/>
          <Footer/>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;