import React from "react";
import PropTypes from "prop-types";
import { Container } from './progressStyle'


const ProgressBar = props => {
  const { value, max, width } = props;
  
  return (
    <Container color={value > 70 ? "green" : "red"} width={width}>
      <progress value = {value} max ={max} />
      <span style={{fontSize: '0.7rem'}}>{(value / max) * 100}%</span>
    </Container>
    
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
};

ProgressBar.defaultProps = {
  max: 100,
  color: '#FF7979',
  width: '10rem'
};

export default ProgressBar;
