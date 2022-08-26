import { useState } from "react";
import Container from "./Container/Container";
import Section from "./Section"; 
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Statistics from "./Statistics";



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



    const addFeedback = option => {
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
        return;
    }
  };


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const total = countTotalFeedback();
  const feedback = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={addFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {total ?
          <Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={feedback}
          /> : <Notification message={'There is no feedback'} />
        }
      </Section>
    </Container>
  );
};

export default App;
