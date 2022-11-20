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
    <main className="contact" aria-label="Contact information">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="username" className="label">
          Username :
        </label>
        <input
          placeholder="Name"
          type="text"
          id="username"
          name="username"
          required
          aria-required="true"
          aria-label="your name here"
          aria-labelledby="username"
        />
        <label htmlFor="email" className="label">
          Email :
        </label>

        <input
          type="email"
          required
          placeholder="Email"
          id="email"
          name="email"
          aria-required="true"
          aria-label="your email here"
          aria-labelledby="email"
        />
        <label htmlFor="message" className="label">
          Message :
        </label>
        <textarea
          name="message"
          required
          placeholder="Message"
          aria-label="your message here"
          aria-labelledby="message"
        />
        <input
          id="message"
          type="submit"
          value="Send"
          className="flat-button"
        />
      </form>
      <p>Les champs précédés d'une étoile (*) sont obligatoires</p>
    </main>
  );
};

export default Contact;
