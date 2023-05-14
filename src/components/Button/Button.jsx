import './Button.scss';

const Button = ({ onClick, children, current }) => {
  return (
    <button className="button" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
