
import React from "react";


class Main  extends React.Component{

  // render(){
  //   return() ;
  // }


}



class HornedBeast extends React.Component{

 
    render(){
      console.log(this.props) ;
      return( 
        
        <div>
          <img src= {this.props.src} alt={this.props.alt} />  
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        
      )
    }
} 


export default Main;

export {
  HornedBeast
}