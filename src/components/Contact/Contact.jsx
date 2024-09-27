import React, { useContext, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useForm, ValidationError } from '@formspree/react';

// Pop-up component to show the success message
const SuccessPopup = ({ closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>Thanks for contacting me!</p>
        <button onClick={closePopup} className="close-button">Close</button>
      </div>
    </div>
  );
};

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [showPopup, setShowPopup] = useState(false);

  // Formspree hook for handling form submissions
  const [state, handleSubmit] = useForm("xpwavqkl");

  // Handle form submission success
  const handleFormSubmit = (e) => {
    handleSubmit(e).then(() => {
      if (state.succeeded) {
        setShowPopup(true); // Show pop-up when form is successfully submitted
      }
    });
  };

  // Function to close the pop-up
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="contact-form" id="contact">
      {/* Left side - Work section copy */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* Right side - Contact form */}
      <div className="c-right">
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <ValidationError prefix="Name" field="user_name" errors={state.errors} />

          <input type="email" name="user_email" className="user" placeholder="Email" />
          <ValidationError prefix="Email" field="user_email" errors={state.errors} />

          <input type="number" name="user_phonenumber" className="user" placeholder="Phone Number" />
          <ValidationError prefix="Phone Number" field="user_phonenumber" errors={state.errors} />

          <textarea name="message" className="user" placeholder="Message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" className="button" disabled={state.submitting}>Send</button>
          
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>

      {/* Display pop-up on successful submission */}
      {showPopup && <SuccessPopup closePopup={closePopup} />}
    </div>
  );
};

export default Contact;
