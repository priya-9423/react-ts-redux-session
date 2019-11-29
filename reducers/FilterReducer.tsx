export default function FilterReducer(visibility: string = "SHOW_ALL", action:any){
  switch(action.type){
    case "SET_FILTER":
    return action.visibility;
    default:
    return visibility;
  }
}