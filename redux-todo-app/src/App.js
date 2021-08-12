import { useState } from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);

  const doneList = (name) => {
    dispatch({ type: "DONE_LIST", payload: name });
  }

  const deleteList = (name) => {
    dispatch({ type: "DELETE_LIST", payload: name });
  };

  const addList = () => {
    if (!name) return;

    setComplete(false);

    dispatch({
      type: "ADD_LIST",
      payload: {
        name,
        complete,
      },
    });
    setName("");
  };


  const inputText = (e) => {
    setName(e.target.value);
  };
  
  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>追加</button>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists.filter((list) => list.complete === false).map((list, index) => (
          <div key={index}>
            {list.name}
            <button onClick={() => doneList(list.name)}>完了</button>
            <button onClick={() => deleteList(list.name)}>削除</button>
          </div>
        ))}
      </ul>
      <h2>完了したTodoリスト</h2>
      <ul>
        {lists.filter((list) => list.complete === true).map((list, index) => (
          <div key={index}>{list.name}</div>
        ))}
      </ul>
    </div>
  );
}

export default App;
