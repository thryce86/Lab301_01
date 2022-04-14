import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';
// https://stackoverflow.com/questions/44128959/multiple-components-within-a-file
import './App.css';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// Lab 3 switched from making in main to making in app
import data from "./data.json";
// import { Modal } from "react-bootstrap";

// Lab 04 
import { Form } from 'react-bootstrap';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      selected: 0,
      showModal: false,
      hornsDisplayed : 99,

      //selected properties
      selected_src: '',
      selected_alt: "",
      selected_description: "",
      selected_title: "",



    }

  }

  showModalHandler = (name) => {
    this.setState({
      showModal: true,
      name: name , 
      


    });
  };

  hideModalHandler = () => {
    this.setState({
      showModal: false
    });
  };

  setSelected = (src, alt, description, title) => {

    this.setState({
      selected_src: src,
      selected_alt: alt,
      selected_description: description,
      selected_title: title,
    }, () => console.log(this.state.selected_description));

  };



  // Lab_04

  hornsDisplayHandler = ( eventObj ) => {
    let input = eventObj.target.value ;
    // console.log(input) ; 
    if (parseInt(input) === 99 ){
    this.setState({
      hornsDisplayed : 99
    })
  }
  else if(parseInt(input) === 1 ){
    this.setState({
      hornsDisplayed : 1
    })
  }

  else if(parseInt(input) === 2 ){
    this.setState({
      hornsDisplayed : 2
    })
  }

  else if(parseInt(input) === 3 ){
    this.setState({
      hornsDisplayed : 3
    })
  }

  else if(parseInt(input) === 100 ){
    this.setState({
      hornsDisplayed : 100
    })
  }



  }//end display handler 



  render() {

    // Send the data file down from app into Main 

    console.log('AAAAA' + this.state.selected_title);


    // sent data into main 
    return (<>
      <Header />
      <Form>
          <Form.Label>Number of horns to be displayed
            
          </Form.Label>

         


          <Form.Select onChange = {this.hornsDisplayHandler}
          className="w-25"  
                   name="select" >

                  {/* the number of horns  */}
            <option value="99" >ALL</option>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100 </option>
          </Form.Select>
          {/* <Button type="submit">Submit</Button> */}
        </Form> 

      <Main   hornsDisplayed = {this.state.hornsDisplayed}
        data={data}
        showModalHandler={this.showModalHandler}
        setSelected={this.setSelected}
       / >

       




    




      <SelectedBeast showModal={this.state.showModal}
        onHide={this.hideModalHandler}
        selected_src={this.state.selected_src}
        selected_alt={this.state.selected_alt}
        selected_description={this.state.selected_description}
        selected_title={this.state.selected_title}
      />

      <Footer />
    </>);

  }//end render 

}

export default App;

