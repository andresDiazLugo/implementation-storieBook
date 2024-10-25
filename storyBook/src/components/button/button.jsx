import PropTypes from "prop-types";
import "./button.css";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

export default function Button({ children, type, onClick }) {
  return (
    <button className={getStyles(type)} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "terciary"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  onClick: () => {alert("hola mundo")},
};