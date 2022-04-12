import React from "react";
import Header from './Header.js' ;
import Footer from './Footer.js' ;
// https://stackoverflow.com/questions/44128959/multiple-components-within-a-file
import Main ,{HornedBeast} from './Main.js' ;


class App  extends React.Component{

  render(){ 

    return(  <>
             <Header />
             <HornedBeast src='https://nypost.com/wp-content/uploads/sites/2/2015/10/1_mpm-comedy_wildlife_awards05.jpg?quality=80&strip=all&w=1024'  alt="Not Available" title='A deer' description='Some stuff' />
             <HornedBeast src='' alt="Not Available" title='Will be a picture' description='Cant get image to work so dont have a description yet.' />
            <Footer  />
            </>   ) ;

  }//end render 

}

export default App ;

