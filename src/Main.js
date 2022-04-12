
import React from "react";
import  HornedBeast  from "./HornedBeast.js";
// import the data 
import data  from "./data.json";


class Main  extends React.Component{

  render(){

    // assign holding array 
    // will be used to display everything 
    let all_the_elements = [] ;

    // points to the data -> makes temp for an index-> gives you access to props 
    data.forEach( (arrayElement) => {
          console.log(arrayElement.image_url) ;
          all_the_elements.push(

                  <HornedBeast
                        src={arrayElement.image_url}
                        description={arrayElement.description}
                        title={arrayElement.title}
                        alt={arrayElement.keyword}
                  />
          )
      // push each individual component to the array 

    }  )

    return(   
      <>
      <main>
          {all_the_elements}
      </main>

      </>
    ) ;
  }


}



// class HornedBeast extends React.Component{

 
//     render(){
//       console.log(this.props) ;
//       return( 
        
//         <div>
//           <img src= {this.props.src} alt={this.props.alt} />  
//           <h2>{this.props.title}</h2>
//           <p>{this.props.description}</p>
//         </div>
        
//       )
//     }
// } 


export default Main;

