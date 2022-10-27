import { useState } from 'react';
// import PropTypes from 'prop-types';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import { Markup, Title, TitleStatistics } from './Feedback.styled.jsx';

export default function Feedback() {
  // Передаем стартовое значение =====
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const types = { good, neutral, bad };

  const stateKeys = Object.keys(types);

  const handleFeedbackСlick = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  return (
    <Markup>
      <Title>Please leave feedback</Title>
      <Section title="">
        <FeedbackOptions
          options={stateKeys}
          onLeaveFeedback={handleFeedbackСlick}
        />
      </Section>

      <TitleStatistics>Statistics</TitleStatistics>
      <Section title="">
        {countTotalFeedback() > '0' ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Markup>
  );
}
