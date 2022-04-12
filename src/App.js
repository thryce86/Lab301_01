import React from "react";
import Header from './Header.js' ;
import Footer from './Footer.js' ;
// https://stackoverflow.com/questions/44128959/multiple-components-within-a-file
import  './App.css';
import Main from './Main.js' ;


class App  extends React.Component{

  render(){ 

    return(  <>
             <Header />
             <Main />
            <Footer  />
            </>   ) ;

  }//end render 

}

export default App ;

