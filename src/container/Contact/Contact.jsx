import React, { useRef } from "react";
import "./Contact.scss";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_arbew5e",
        "template_qyx8ieg",
        form.current,
        "2JzyiynDbsSx2lfK2"
      )
      .then(
        (result) => {
          alert("good");
          console.log(result.text);
        },
        (error) => {
          alert("nope");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" type="text" name="user_name" required />
        <input type="email" required placeholder="Email" name="user_email" />
        <textarea name="message" required placeholder="Message" />
        <input type="submit" value="Send" className="flat-button" />
      </form>
    </div>
  );
};

export default Contact;
