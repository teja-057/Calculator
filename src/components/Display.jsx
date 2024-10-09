import css from "./Display.module.css";
const Display = ({ disVal }) => {
  return <input type="text" className={css.display} readOnly value={disVal} />;
};
export default Display;
