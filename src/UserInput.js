import React, { Component } from "react";
import "./UserInput.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "./react-select.css";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      selectedOption: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleChange(date) {
    console.log(date);
    this.setState({
      startDate: date
    });
  }
  handleSelect(selectedOption) {
    this.setState({
      selectedOption: selectedOption
    });
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <div>
          <Select
            name=""
            value={this.state.selectedOption}
            onChange={this.handleSelect}
            options={[
              { value: "국내여비", lable: "국내여비" },
              { value: "사무용품비", lable: "국내여비" }
            ]}
          />
          <InputDetail />
        </div>
      </div>
    );
  }
}

class InputDetail extends Component {
  render() {
    return (
      <form>
        <input type="text" value="" />
      </form>
    );
  }
}
export default UserInput;
