import React from 'react';
import { ReactDOM } from 'react';
import './card1.css';

function card1() {
  // return (
  //   <div class="w3-container">
  //     <h2>Card Example</h2>

  //     <div class="w3-card-4 w3-dark-grey" style="width:50%">

  //       <div class="w3-container w3-center">
  //         <h3>Friend Request</h3>
  //         <img src="img_avatar3.png" alt="Avatar" style="width:80%">
  //           <h5>John Doe</h5>

  //           <div class="w3-section">
  //             <button class="w3-button w3-green">Accept</button>
  //             <button class="w3-button w3-red">Decline</button>
  //           </div>
  //       </div>

  //     </div>
  //   </div>
  // );
  return (
    // <div class="w3-container">

    //   <div class="w3-card-4 w3-dark-grey">

    //     <div class="w3-container w3-center">
    //       <h3>Friend Request</h3>
    //         <h5>John Doe</h5>
    //         <div class="w3-section">
    //           <button class="w3-button w3-green">Accept</button>
    //           <button class="w3-button w3-red">Decline</button>
    //         </div>
    //     </div>

    //   </div>
    // </div>
    <div class="container">
      <div class="wrapper">
        <div class="banner-image"> </div>
        <h1> Toyota Supra</h1>
        <p>Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.</p>
      </div>
      <div class="button-wrapper">
        <button class="btn outline">DETAILS</button>
        <button class="btn fill">BUY NOW</button>
      </div>
    </div>

  );
}
export default card1;
