import React from "react";

export default function List({ todoData, setTodoData }) {
  //** 리스트 버튼 스타일 */
  const btnStyle = {
    color: "#fff",
    backgroundColor: "orange",
    border: "none",
    padding: "5px 9px",
    vorderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  //** 리스트 스타일, 체크박스 클릭시 라인있게, handleCompleChange에서 true,false
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  //** 클릭된 X 리스트(id가 같은 데이터) 지우는 함수 (filter)  */
  const handleClick = (id) => {
    //**this.todoData가 아니라 this.state.todoData로가 아니라 todoData로 */
    let newTodoData = todoData.filter((data) => data.id !== id);
    //**todoData 갱신 , */
    setTodoData(newTodoData);
  };

  //**checkbox completed 변경*/
  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  //******************************************************************/

  return (
    <div>
      {" "}
      {todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={() => handleCompleChange(data.id)}
          />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
