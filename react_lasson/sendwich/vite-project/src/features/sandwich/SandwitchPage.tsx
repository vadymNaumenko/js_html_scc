import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

export default function SandwichPage(): JSX.Element {
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );
  const dispatch = useDispatch();
  function handleAddCheese():void {
    dispatch({type: 'sandwich/addIngredient', payload: 'cheese'});
  }
  function handleAddSalami():void {
    dispatch({type: 'sandwich/addIngredient', payload: 'salami'});
  }
  function handleAddBread():void {
    dispatch({type: 'sandwich/addIngredient', payload: 'bread'});
  }
  function handleClear():void {
    dispatch({type: 'sandwich/clear'});
  }
  return (
    <div>
      <h1>Choose your sandwich</h1>
      <p>Sandwich: {ingredients}</p>
      <button type="button" onClick={handleAddCheese}>add cheese</button>
      <button type="button" onClick={handleAddSalami}>add salami</button>
      <button type="button" onClick={handleAddBread}>add bread</button>
      <button type="button" onClick={handleClear}>clear</button>
    </div>
  );
}