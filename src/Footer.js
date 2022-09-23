import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer__main">
          <div className="contact-info">
            <h2>For any queris please contact:</h2>
            <h4> Phone no. : +852 6611 3411</h4>
            <h4> Email: ABCD1234@gmail.com</h4>
          </div>

          <form>
            <h3>Contact us</h3>
            <label htmlFor="your-fname">Your first name:</label>
            <input type="text" id="your-fname" />
            <label htmlFor="your-lname">Your last name:</label>
            <input type="text" id="your-lname" />
            <label htmlFor="your-email">Your email:</label>
            <input type="text" id="your-email" />
            <label htmlFor="your-number">Your phone number (optional):</label>
            <input type="text" id="your-number" />
            <label>
              <h4>your issue: </h4>
              <textarea></textarea>
            </label>
            <input type="submit" value="submit" />
          </form>
        </div>
        <div class="copyright">2022 copyright &copy; Sam Lee</div>
      </footer>
    </>
  );
};

export default Footer;
