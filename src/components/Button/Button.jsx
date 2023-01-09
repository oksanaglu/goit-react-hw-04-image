import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children, onClick }) => (
  <ButtonStyled type="button" onClick={onClick}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;




