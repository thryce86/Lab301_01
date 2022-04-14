import React from "react";
// import  HornedBeast  from "./HornedBeast.js";
import { Modal  } from 'react-bootstrap';

class SelectedBeast extends React.Component{
// {console.log(  this.props.hideModalHandler)}

render(){

  console.log(this.props.selected_title) ;
    return(
      <Modal 
      show = {this.props.showModal} 
      
      onHide={this.props.onHide}
      >
          
        
        <Modal.Title>   {this.props.selected_title} </Modal.Title>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <img src= {this.props.selected_src} alt={this.props.selected_alt}>
        </img>
        <p>{this.props.selected_description}</p>
        </Modal.Body>
      </Modal>

    )
}

               
 



}


export default SelectedBeast ;


{/* <Modal 
show = {this.state.showModal} 
onHide={this.hideModalHandler}
>
   <Modal.Header closeButton></Modal.Header>
</Modal> */}
