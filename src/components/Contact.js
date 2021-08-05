import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  submitHandler(){
    console.log();
    console.log('submit clicked');
  }
  render() {
    return (
      <div id='contact-cmpnt-container'>
        <div>
          <p>Are you interested in developing a career and getting jobs at leading tech companies? Send us a short message and we will contact you shortly.</p>
        </div>
        <div id='contact-form-container'>
          <form id='my-form'>
            <input type='text' placeholder='Email'/>
            <br />
            <textarea type='text' id='contact-msg-input' placeholder='Type your message here...'/>
          </form>
          <button id='submit-btn' form='my-form' type='submit' onClick={()=>this.submitHandler()}>submit</button>
        </div>
      </div>
    );
  }
};

export default Contact;