import React from "react";
import { connect } from "react-redux";

import FilterPanel from "../Components/FilterPanel";

function FilterContainer(props) {
  return (
    <div>
      <FilterPanel
        onClick={filterName =>
          props.dispatch({ type: "SET_FILTER", visibility: filterName })
        }
      />
    </div>
  );
}

export default connect()(FilterContainer);
