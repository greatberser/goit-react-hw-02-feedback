import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeedback = evt => {
    const event = evt.target.dataset['state'];
    this.setState({ [event]: this.state[event] + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => {
      return acc + num;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round(
        (this.state.good /
          Object.values(this.state).reduce((acc, num) => {
            return acc + num;
          }, 0)) *
          100
      ) || '0'
    );
  };

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.counterFeedback}
        />

        <Statistics
          {...this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}