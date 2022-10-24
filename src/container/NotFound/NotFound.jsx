// STYLE
import "./NotFound.scss";
// utils from react router dom
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="error__container">
      <div className="error__main">
        <p className="error__title">404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="error__back">
        {" "}
        Retourner sur la page d’accueil{" "}
      </Link>
    </main>
  );
};

export default NotFound;
