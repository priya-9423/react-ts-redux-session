import React, { PureComponent } from "react";

import FilterButtons from "./FilterButtons";

export default class FilterPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      currentFilter: "SHOW_ALL"
    }
  }

  onClickEvent=(name) => {
    console.log(name)
    this.props.onClick(this.props);
    this.setState({
      currentFilter: name
    });
  }

  render() {
    return (
      <div>
        <FilterButtons
          value="All"
          filter={this.state.currentFilter}
          name="SHOW_ALL"
          onClick={this.onClickEvent}
        />
        <FilterButtons
          value="Completed"
          filter={this.state.currentFilter}
          name="COMPLETED"
          onClick={this.onClickEvent}
        />
        <FilterButtons
          value="Pending"
          filter={this.state.currentFilter}
          name="PENDING"
          onClick={this.onClickEvent}
        />
      </div>
    );
  }
}
