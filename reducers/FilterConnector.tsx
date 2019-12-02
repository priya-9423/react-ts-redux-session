import React from 'react'

import FilterPanel from "./Components/FilterPanel";

function FilterContainer(props) {
<div>
<FilterPanel onClick-{filterName => props.dispatch({ type: "SET_FILTER", visibility: filterName })}/>
</div>
}
 
 export default connect()(FilterContainer);
