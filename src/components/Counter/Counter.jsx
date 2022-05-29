import React, { Component } from 'react';

import styles from './Counter.module.scss';

export class Counter extends Component {
  constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

  handleDecrement = (e) => {
    e.preventDefault();

    this.setState((state) => ({
			count: state.count -= 1,
		}));
  }

  handleIncrement = (e) => {
    e.preventDefault();

    this.setState((state) => ({
			count: state.count += 1,
		}));
  }

  render() {
    return (
      <div className={styles.counter}>
        <button
          className={styles.button}
          type="button"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span className={styles.value}>{ this.state.count }</span>
        <button
          className={styles.button}
          type="button"
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
};
