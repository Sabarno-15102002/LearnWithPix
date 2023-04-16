import React from "react";
function ContactUs() {
  return (
    <div class="contact-us-section row">
      <div class="col-lg-6 contact-us-template">
        <img
          src="images/contactUs.png"
          alt="contact"
          draggable="false"
          className="contact-us-img fade-in"
        />
        <h3 className="anim-typewriter">Feel free to ask any queries</h3>
        <div className="slide-up">
          <p> +91 XXXXX XXXXX</p>
        </div>
      </div>
      <form
        action="https://formspree.io/f/maykbbkl"
        method="POST"
        className="contact-us-form mobile-form col-lg-6"
      >
        <div className="form-input">
          <label for="fname">First name</label>
          <input type="text" id="fname" name="fname" required />
        </div>
        <div className="form-input">
          <label for="lname">Last name</label>
          <input type="text" id="lname" name="lname" required />
        </div>
        <div className="form-input">
          <label for="email">Email Id</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="query">Enter your queries </label> <br></br>
          <textarea
            type="text"
            rows="6"
            cols="35"
            id="query"
            name="query"
            required
          />
        </div>
        <button type="submit" class="btn btn-lg btn-danger mobilebutton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
