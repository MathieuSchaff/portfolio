import { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_51o9bep",
        "template_qyx8ieg",
        form.current,
        "2JzyiynDbsSx2lfK2"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="contact__title">
          Get in <span>touch</span>
        </h2>
        <p className="contact__subtitle">
          Have a project in mind or just want to say hello? Feel free to reach
          out.
        </p>

        <div className="contact__content">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__field">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your name"
                required
                aria-required="true"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                aria-required="true"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
                rows="5"
              />
            </div>
            <button type="submit" className="contact__submit">
              {sent ? "Sent!" : "Send message"}
            </button>
          </form>

          <div className="contact__info">
            <p className="contact__info-text">
              You can also find me on these platforms:
            </p>
            <ul className="contact__socials">
              <li>
                <a
                  href="https://www.linkedin.com/in/mathieu-schaff-frontend/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MathieuSchaff"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/MathSchaff"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
