import React from "react";
// import "./P.css";

class Contact extends React.Component {
  submitHandler(){
    console.log('submit clicked');
  }
  render() {
    return (
      <div id='contact-cmpnt-container'>
        <div>
          <p>Are you interested in developing a career and getting jobs at leading tech companies? Send us a short message and we will contact you shortly.</p>
        </div>
        <div id='contact-form-container'>
          <form>
            <input type='text' />
            <input type='text' />
          </form>
          <button id='submit-btn' onClick={()=>this.submitHandler()}>submit</button>
        </div>
      </div>
    );
  }
};

export default Contact;