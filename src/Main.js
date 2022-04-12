
import React from "react";
import  HornedBeast  from "./HornedBeast.js";

class Main  extends React.Component{

  render(){
    return(   
      <>
      <main>
          <HornedBeast src="https://nypost.com/wp-content/uploads/sites/2/2015/10/1_mpm-comedy_wildlife_awards05.jpg?quality=80&strip=all&w=1024"s  alt="Not Available" title='A deer' description='Some stuff' />
          <HornedBeast src='https://assetsnffrgf-a.akamaihd.net/assets/m/502014128/univ/art/502014128_univ_lsr_xl.jpg' alt="Not Available" title='Will be a picture' description='' />

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

// export {
//   HornedBeast
// }