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
    alert('what acsess do you need: ' + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          what acsess do you need:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Student">Student</option>
            <option value="Moderator">Moderator</option>
            <option value="Submitter">Submitter</option>
            <option value="Administrator">Administrator</option>
            <option value="Researcher">Researcher</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
