import React from "react";

class TaskList extends React.Component {
  render() {
    const taskList = [
      {
        id: 1,
        name: "吃饭",
        completed: true,
      },
      {
        id: 2,
        name: "睡觉",
        completed: false,
      },
      {
        id: 3,
        name: "敲代码",
        completed: false,
      },
    ];

    return (
      <div>
        <h2>当前未完成任务数:2</h2>
        <div className="item">
          {taskList.map((item) => {
            const style = {
              color: item.completed ? "green" : "red",
            };
            return (
              <div className="item" key={item.id} style={style}>
                <h2>编号：{item.id}</h2>
                <h3>任务名： {item.name}</h3>
                <h3>是否完成：{item.completed ? "完成" : "未完成"}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default TaskList;
