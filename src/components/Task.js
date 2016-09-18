import React from 'react';

const Task = ({ toggle, task }) => {
  const completed = task.isDone ? 'completed' : '';
  return (
    <li className="task">
      <input
        id={task.key}
        onChange={toggle}
        checked={task.isDone}
        type="checkbox"
        className="task-toggle"
      />
      <label
        htmlFor={task.key}
        className={`task-label ${completed}`}
      >
        {task.description}
      </label>
    </li>
  );
};

export default Task;
