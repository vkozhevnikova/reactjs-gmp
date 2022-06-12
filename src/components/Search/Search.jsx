import React, { PureComponent } from 'react';

import styles from './Search.module.scss';

export class Search extends PureComponent {
  state = {
    text: '',
  }

	handleChangeText = ({ target: { value } }) => {
		const { onChangeSearch } = this.props;

		this.setState({
			text: value,
		});

		onChangeSearch(value);
	}

	render() {
		const { text } = this.state;

		return (
			<input
				type="text"
				name="search"
				className={styles.input}
				placeholder="What do you want to watch?"
				value={text}
				onChange={this.handleChangeText}
			/>
		);
	}
};
