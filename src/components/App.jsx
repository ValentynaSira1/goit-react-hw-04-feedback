import { useState } from "react";
import { Statistics } from "components/statistics";
import { FeedbackOptions } from "components/feedbackOptions/feedbackOptions";
import { Section } from "components/section";
import { Notification } from "components/notification";
import css from "./App.module.css";

export const App = () => {
  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    };
  }

  const options = ['good', 'neutral', 'bad'];

    return(
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions 
          options={options}
          onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    )
  };

export default App;