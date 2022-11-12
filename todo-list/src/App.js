//*react 라이브러리에서 React와 react 컴포넌트라는 클래스도 가져오기*/
import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import Form from "./components/Form";

export default function App() {
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

  //******************************************************************/

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <List todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
