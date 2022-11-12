import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./List";

const Lists = React.memo(({ todoData, setTodoData, handleClick }) => {
  //** 리스트 스타일, 체크박스 클릭시 라인있게, handleCompleChange에서 true,false
  const handleEnd = (result) => {
    //**result 매개변수에는 source 항목 및 대상 위차와 같은 드래그 이벤트에 대한 정보가 포함 */
    console.log("result", result);
    //목적지가 없으면 (이벤트 취소) 이 함수 종료
    if (!result.destination) return;

    //리액트 불변성을 위해 새로운 todoData 생성
    const newTodoData = todoData;

    // 1. 변경시키는 아이템을 배열에서 지우기
    // 2. return값으로 지워진 아이템 잡아두기
    const [reorderdItem] = newTodoData.splice(result.destination.index, 1);

    // 3. 원하는 자리에 reorderdItem을 Insert 하기
    newTodoData.splice(result.source.index, 0, reorderdItem); // start(시작) deletecount(n개 빼기) item(넣기)
  };

  //******************************************************************/

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      provided={provided}
                      snapshot={snapshot}
                      setTodoData={setTodoData}
                      handleClick={handleClick}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Lists;
