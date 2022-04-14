import React from "react";
// import  HornedBeast  from "./HornedBeast.js";
import { Modal } from "react-bootstrap";

class SelectedBeast extends React.Component{
// {console.log(  this.props.hideModalHandler)}

render(){
    return(
      <Modal 
      show = {this.props.showModal} 
      onHide={this.props.onHide}
      >
        <Modal.Header closeButton></Modal.Header>
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
