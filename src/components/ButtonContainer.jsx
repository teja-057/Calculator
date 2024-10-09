import css from "./ButtonContainer.module.css";
const ButtonContainer = ({ onClickFun }) => {
  let but = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "AC",
    "0",
    ".",
  ];
  return (
    <div className={css.buttonContainer}>
      {but.map((but) => (
        <button
          key={but}
          onClick={() => onClickFun(but)}
          className={css.button}
        >
          {but}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
