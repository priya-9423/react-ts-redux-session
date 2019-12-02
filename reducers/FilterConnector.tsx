import React from "react";
import { connect } from "react-redux";

import FilterPanel from "../Components/FilterPanel";

function FilterContainer(props) {
  return (
    <div>
      <FilterPanel
        onClick={value =>
          props.dispatch({ type: "SET_FILTER", visibility: value })
        }
      />
    </div>
  );
}

export default connect()(FilterContainer);
