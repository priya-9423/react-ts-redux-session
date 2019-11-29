export default function ToDos(state: [] = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return[
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    case "MARK_COMPLETED":
      return state.map((item, index) => {
        if (item.text === action.text) {
          return {
            text : item.text,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
}
