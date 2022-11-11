//*react 라이브러리에서 React와 react 컴포넌트라는 클래스도 가져오기*/
import React from "react";
import "./App.css";

export default function App {
  state = {
    todoData: [],
    value: "",
  };

  //** 리스트 버튼 스타일 */
  btnStyle = {
    color: "#fff",
    backgroundColor: "orange",
    border: "none",
    padding: "5px 9px",
    vorderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  //** 리스트 스타일
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  //** 클릭된 X 리스트(id가 같은 데이터) 지우는 함수 (filter)  */
  handleClick = (id) => {
    //**this.todoData가 아니라 this.state.todoData로 */
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    //**todoData 갱신 , */
    this.setState({ todoData: newTodoData });
  };

  //**이벤트 확인*/
  handleChange = (e) => {
    console.log("e", e);
    this.setState({ value: e.target.value });
  };

  //**enter시 일어날 것 */
  handleSubmit = (e) => {
    //**form에 input 실행시 페이지 리로드 방지 */
    e.preventDefault();

    //**새로운 할일 데이터 newtodo*/
    //id는 중복피하기 위해 Date로, 값은 우리가 입력한 것, completed는 아직 안했으니 false
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    //**원래 있던 할일에 새로운 할일 더해주기 */
    // value:''하면 안에 내용 없어짐
    this.setState({ todoData: [...this.state.todoData, newTodo], value: " " });
  };

  //**checkbox completed */
  handleCompleChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: newTodoData });
  };

  //******************************************************************/

    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder={"해야할 일을 적으시오!"}
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: "1" }}
            />
          </form>

          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => this.handleCompleChange(data.id)}
              />
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
