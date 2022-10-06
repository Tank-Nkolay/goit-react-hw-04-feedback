import React from 'react';
// import PropTypes from 'prop-types';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import { Markup, Title, TitleStatistics } from './Feedback.styled.jsx';

class Feedback extends React.Component {
  // Передаем стартовое значение ===
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateKeys = Object.keys(this.state);

  options = this.stateKeys;

  handleFeedbackСlick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };
  // ==============================================

  // {this.state.visible ? 'Скрыть' : 'Показать'}
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Markup>
        <Title>Please leave feedback</Title>
        <Section title="">
          <FeedbackOptions
            options={this.stateKeys}
            onLeaveFeedback={this.handleFeedbackСlick}
          />
        </Section>

        <TitleStatistics>Statistics</TitleStatistics>
        <Section title="">
          {this.countTotalFeedback() > '0' ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Markup>
    );
  }
}

export default Feedback;

// ===================================
// countPositiveFeedbackPercentage() {
//   return parseInt((this.state.good / this.countTotalFeedback()) * 100);
// }
// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================
