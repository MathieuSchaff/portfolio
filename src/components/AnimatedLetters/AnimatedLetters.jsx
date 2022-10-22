import "./AnimatedLetters.scss";

const AnimatedLetters = ({ letterClass, strArray, idx, className }) => {
  return (
    <span className="">
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${className} ${letterClass} _${i + idx}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
