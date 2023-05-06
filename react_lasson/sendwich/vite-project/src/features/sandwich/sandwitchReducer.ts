import Action from "./types/Action";
import SandwichState from "./types/SandwichState";

const initialState: SandwichState = {
  ingredients: ''
}

export default function sandwichReducer(
  state: SandwichState = initialState,
  action: Action
):SandwichState{
  switch(action.type){
    case 'sandwich/addIngredient':
      return {...state, ingredients: state.ingredients +" "+ action.payload};
    case 'sandwich/clear':
      return {...state, ingredients:""};
    default: return state;
  }
}