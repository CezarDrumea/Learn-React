import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    if (type === 'inc')
      return () => this.setState((curState) => ({ count: curState.count + 1 }));
    if (type === 'dec')
      return () => this.setState((curState) => ({ count: curState.count - 1 }));
  }

  render() {
    const date = new Date('june 21 2027');
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleClick('dec')}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleClick('inc')}>+</button>
      </div>
    );
  }
}
