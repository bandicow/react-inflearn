//*react 라이브러리에서 React와 react 컴포넌트라는 클래스도 가져오기*/
import React, { useState } from "react";
import Lists from "./components/Lists";
import "./App.css";
import Form from "./components/Form";

export default function App() {
  console.log("App is rendering");

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  //**enter시 일어날 것 */
  const handleSubmit = (e) => {
    //form에 input 실행시 페이지 리로드 방지
    e.preventDefault();

    //**새로운 할일 데이터 newtodo
    //id는 중복피하기 위해 Date로, 값은 우리가 입력한 것, completed는 아직 안했으니 false
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    //**원래 있던 할일에 새로운 할일 더해주기
    // 원래 객체 하나를 추가해주는 거였다.
    setTodoData((prev) => [...prev, newTodo]);
    setValue(""); // value:''하면 안에 내용 없어짐, 이거 따로 빼줌
  };

  //** 클릭된 X 리스트(id가 같은 데이터) 지우는 함수 (filter)  */
  const handleClick = (id) => {
    //**this.todoData가 아니라 this.state.todoData로가 아니라 todoData로 */
    let newTodoData = todoData.filter((data) => id !== id);
    //**todoData 갱신 , */
    setTodoData(newTodoData);
  };

  //******************************************************************/

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할일 목록</h1>
        </div>

        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
