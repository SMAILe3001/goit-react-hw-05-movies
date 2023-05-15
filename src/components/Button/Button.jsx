import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;

Button.propType = {
  onClick: PropTypes.func,
  children: PropTypes.object,
};
