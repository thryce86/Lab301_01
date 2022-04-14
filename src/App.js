import React from "react";
import Header from './Header.js' ;
import Footer from './Footer.js' ;
// https://stackoverflow.com/questions/44128959/multiple-components-within-a-file
import  './App.css';
import Main from './Main.js' ;
import SelectedBeast from './SelectedBeast.js' ;
import 'bootstrap/dist/css/bootstrap.min.css';
// Lab 3 switched from making in main to making in app
import data  from "./data.json";
import { Modal } from "react-bootstrap";




class App  extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      name:"" ,
      selected:0,
      showModal: false,

      //selected properties
      selected_src :'',
      selected_alt:"",
      selected_description : "",
      selected_title : "",



    }

  }

  showModalHandler = (name) => {
    this.setState({
      showModal: true,
      name: name
    });
  };

  hideModalHandler = () => {
    this.setState({
      showModal: false
    });
  };




  render(){ 

    // Send the data file down from app into Main 
 



// sent data into main 
    return(  <>
            <Header />
              <Main 
                    data={data} 
                    showModalHandler={this.showModalHandler}
              />  
              <SelectedBeast showModal={this.state.showModal}
                              onHide={this.hideModalHandler}       />
             
              <Footer  />
            </>   ) ;

  }//end render 

}

export default App ;

