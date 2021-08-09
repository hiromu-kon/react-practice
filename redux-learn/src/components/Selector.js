import { useSelector, useDispatch } from "react-redux";

const Selector = () => {
  const count = useSelector((state) => state.count)
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" })
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" })
  };
  return (
    <>
      <div>Selectorコンポーネント: {count}</div>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </>
  )
}

export default Selector;
