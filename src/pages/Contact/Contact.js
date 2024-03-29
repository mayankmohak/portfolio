import emailjs from "emailjs-com"
import React from "react"

import "./Contact.css"

function Contact() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_gdgjyog', 'template_i9e2uz2', e.target, 'user_ZgoP0IomBr2CKB8rWe3f6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  }

  return (
    <React.Fragment>

      {/*  Contact */}
      <section id="contact" data-animate="bounceIn" className="contact-section contact">
        <br />
        <br />
        <p className="title"> &nbsp; Contact me !!!</p>
        <form id="contact-form" className="col-md-6 mx-auto" onSubmit={sendEmail}>
          <div className="controls">
            <div className="col-md-6 d-inline-block">
              <input type="text" name="name" placeholder="Your Name *" required className="form-control" />
            </div>
            <div className="col-md-6 d-inline-block">
              <input type="text" name="email" placeholder="Your Email *" required className="form-control" />
            </div>
            <div className="col-md-12">
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