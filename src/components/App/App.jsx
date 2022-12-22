import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Statictics } from '../Statistics/Statistics';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    switch (e.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log(`No such option`);
    }
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positive = 0;
    if (good !== 0) {
      positive = Math.round((good / countTotalFeedback()) * 100);
    }
    return positive;
  };

  return (
    <Container>
      <SectionTitle title={'Please leave feedback'}>
        <FeedbackOptions onClick={handleClick} />
      </SectionTitle>
      <SectionTitle title={'Statistics'}>
        {!good && !neutral && !bad ? (
          <NotificationMessage />
        ) : (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </SectionTitle>
    </Container>
  );
}
