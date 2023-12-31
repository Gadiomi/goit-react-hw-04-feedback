import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';

const Section = ({ title }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  function onLeaveFeedback(options) {
    if (options === 'good') setGood(prevState => prevState + 1);
    if (options === 'bad') setBad(prevState => prevState + 1);
    if (options === 'neutral') setNeutral(prevState => prevState + 1);
  }

  return (
    <>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        feedbackLeft={onLeaveFeedback}
      />

      <h2>{title}</h2>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </>
  );
};

export default Section;
