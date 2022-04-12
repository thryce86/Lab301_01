import React from "react";
import Header from './Header.js' ;
import Footer from './Footer.js' ;
// https://stackoverflow.com/questions/44128959/multiple-components-within-a-file
import  './App.css';
import {HornedBeast} from './Main.js' ;


class App  extends React.Component{

  render(){ 

    return(  <>
             <Header />
             <HornedBeast src="https://nypost.com/wp-content/uploads/sites/2/2015/10/1_mpm-comedy_wildlife_awards05.jpg?quality=80&strip=all&w=1024"s  alt="Not Available" title='A deer' description='Some stuff' />
             <HornedBeast src='https://assetsnffrgf-a.akamaihd.net/assets/m/502014128/univ/art/502014128_univ_lsr_xl.jpg' alt="Not Available" title='Will be a picture' description='' />
            <Footer  />
            </>   ) ;

  }//end render 

}

export default App ;

