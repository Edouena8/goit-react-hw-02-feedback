import React from "react";
import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };


  countTotalFeedback = () => {
    return Object.values(this.state).reduce((value, acc) => acc += value, 0);
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good * 100 / this.countTotalFeedback() || 0);
  }

  render() {
    const {good, neutral, bad} = this.state;
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex-start',
        padding: '40px',
        flexDirection: 'column',
        gap: '40px',
        color: '#010101',
      }}>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title='Statistics'>
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback"/>
            ) : (
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
            )
          }
        </Section>
      </div>
    )
  }
}

export default App;
