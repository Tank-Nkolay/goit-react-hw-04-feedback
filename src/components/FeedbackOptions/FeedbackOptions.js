import React from 'react';
import PropTypes from 'prop-types';
import { BoxButton, Li, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BoxButton>
    {options.map(option => {
      return (
        <Li key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </Li>
      );
    })}
  </BoxButton>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
