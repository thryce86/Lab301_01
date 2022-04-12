import React from "react";
// import { HornedBeast } from "./Main";


class HornedBeast  extends React.Component{

    constructor(props){
      super(props);
      this.state={
        clicks : 0 ,

      } ;
    }

  handlesClicks=() =>{
    this.setState({
      clicks :this.state.clicks +1 , 
     
    })
   console.log(this.state.clicks) ;   //it works
  }

  render(){
    // console.log(this.props) ;
    return( 
      
      <div>
        <img onClick={this.handlesClicks} src= {this.props.src} alt={this.props.alt} />  
        <p>❤️ {this.state.clicks}</p>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
      
    )
  }
} 

export default HornedBeast ;


