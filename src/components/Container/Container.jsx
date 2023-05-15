import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;

Container.propType = {
  children: PropTypes.object,
};
