import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Counter(): JSX.Element {
  // как получить значение центролизованного состояния?
  // как добраться внутри стора до нужного значения
  const counter = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();
  // внутрь dispatch передаем действие(action) -
  // и это будет изменять значение централизованного состояния
  function handlePlus(): void {
    dispatch({ type: "counter/plus", payload: 1 });
  }
  function handleMinus():void{
    dispatch({ type: "counter/minus", payload: 1});
  }
  return (
    <>
      <div>Counter: {counter}</div>
      <button type="button" onClick={handlePlus}>
        +1
      </button>
      <button type="button" onClick={handleMinus}>-1</button>
    </>
  );
}
