//*react 라이브러리에서 React와 react 컴포넌트라는 클래스도 가져오기*/
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    backgroundColor: "orange",
    border: "none",
    padding: "5px 9px",
    vorderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ];

  //** 클릭된 X id가 같은 데이터 지우는 함수 (filter)  */
  handleClick = (id) => {
    let newTodoData = this.todoData.filter((data) => data.id !== id);
    console.log(newTodoData);
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          {this.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false} />
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(data.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
