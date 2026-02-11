import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.scss";

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
          Prenons <span>contact</span>
        </h2>
        <p className="contact__subtitle">
          Vous avez un projet en tête ou vous voulez simplement dire bonjour ? N'hésitez pas à me contacter.
        </p>

        <div className="contact__content">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__field">
              <label htmlFor="username">Nom</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Mon nom"
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
                placeholder="mon@email.com"
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
              {sent ? "C'est envoyé!" : "Envoyer"}
            </button>
          </form>

          <div className="contact__info">
            <p className="contact__info-text">
                Vous pouvez également me retrouver sur ces plateformes :
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
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
