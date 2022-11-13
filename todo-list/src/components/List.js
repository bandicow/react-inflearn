import React, { useState } from "react";

const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title); //  edit 누르면 기존 타이틀 보이기

    //**checkbox completed 변경*/
    const handleCompleChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    //**  */
    const handleEditChange = (event) => {
      setEditedTitle(event.target.value);
    };

    //** 바꿔줘야하는 id 잡고 title을 변경해서 집어넣기 */
    const handleSubmit = (event) => {
      event.preventDefault();
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));

      setIsEditing(false);
    };

    //******************************************************************/
    if (isEditing) {
      return (
        <div>
          <div
            className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 borde rounded`}
          >
            <div className="item-center">
              <form onSubmit={handleSubmit}>
                <input
                  value={editedTitle}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                />
              </form>
            </div>
            <div className="item-center">
              <button
                className="px-4 py-2 float-right"
                onClick={() => setIsEditing(false)}
              >
                X
              </button>
              <button
                className="px-4 py-2 float-right" //float-right여서 X보다 뒤에온다. 오른쪽 정렬?
                type="submit"
                onSubmit={handleSubmit}
              >
                save
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div
            key={id}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={`${
              snapshot.isDragging ? "bg-gray-300" : "bg-gray-100"
            } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 borde rounded`}
          >
            <div className="item-center">
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleChange(id)}
              />
              <span className={completed ? "line-through" : undefined}>
                {title}
              </span>
            </div>
            <div className="item-center">
              <button
                className="px-4 py-2 float-right"
                onClick={() => handleClick(id)}
              >
                X
              </button>
              <button
                className="px-4 py-2 float-right" //float-right여서 X보다 뒤에온다. 오른쪽 정렬?
                onClick={() => setIsEditing(true)}
              >
                edit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default List;
