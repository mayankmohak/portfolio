import React from "react"

import "./Contact.css"

function Contact() {
  return (
    <React.Fragment>

      {/*  Contact */}
      <section id="contact" data-animate="bounceIn" classNameName="contact-section contact">
        <br />
        <br />
        <p className="title"> &nbsp; Contact me</p>
        <form id="contact-form" className="col-lg-8 mx-auto" method="post" action="#">
          <div className="controls">
            <div className="d-inline-block">
              <input type="text" name="name" placeholder="Your firstname *" required className="form-control" />
            </div>
            <div className="d-inline-block">
              <input type="text" name="surname" placeholder="Your lastname *" required className="form-control" />
            </div>
            <div className="d-inline-block">
              <input type="text" name="email" placeholder="Your email *" required className="form-control" />
            </div>
            <div className="d-inline-block">
              <input type="text" name="phone" placeholder="Your phone *" className="form-control" />
            </div>
            <div className="col-md-11">
              <textarea name="message" placeholder="Message for me *" rows="4" required className="form-control"></textarea>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit" className="sbtn neon-border-btn black-btn">Send message</button>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default Contact;