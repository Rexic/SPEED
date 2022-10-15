/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Student' };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert(`What access do you need: ${this.state.value}`);
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          what access do you need:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Student">Student</option>
            <option value="Moderator">Moderator</option>
            <option value="Analyst">Analyst</option>
            <option value="Administrator">Administrator</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
