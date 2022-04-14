import React from "react";
import Card from "react-bootstrap/Card";
import "./HornedBeasts.css" ;


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

    this.props.showModalHandler(this.props.name);
    
    this.props.setSelected(this.props.src , this.props.alt ,this.props.description ,this.props.title);

  //  console.log(this.state.clicks) ;   //it works
  }

  render(){
    // console.log(this.props) ;
    return( 
      
      <div>

        {/* <img onClick={this.handlesClicks} src= {this.props.src} alt={this.props.alt} />  
        <p>❤️ {this.state.clicks}</p>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p> */}

              <Card border= "primary" style={{ width: '18rem',  height: '28rem'}}>
                  <Card.Img onClick={this.handlesClicks} variant="top" src={this.props.src} />
                  <Card.Body>
                  
                  <Card.Title>{this.props.title}</Card.Title>
                  
                  <Card.Text>
                          {this.props.description}
                          
                  </Card.Text>
                  
                  </Card.Body>
                  <p>❤️ {this.state.clicks}</p>



              </Card> 

              <br />



      </div>
      
    )
  }
} 

export default HornedBeast ;


