import "./AnimatedLetters.scss";

const AnimatedLetters = ({ strArray, className }) => {
  return (
    <span className="">
      {strArray.map((char, i) => (
        <span key={char + i} className={`${className} text-animate-hover`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
