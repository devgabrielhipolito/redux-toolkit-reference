import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { increment, decrement } from "../../redux/Actions";

export const Counter = () => {
  const counter = useSelector((state: RootState) => state.counterSlices.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };
  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <>
      <button onClick={handleIncrement}>Aumentar</button>
      <p>{counter}</p>
      <button onClick={handleDecrement}>Diminuir</button>
    </>
    );
    
    
};
