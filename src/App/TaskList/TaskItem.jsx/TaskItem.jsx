import { useContext } from "react";

import ThemeContext from "../../ThemeContext"; 
import TasksContext from "../../TasksContext"; 

import TaskItem from "./TaskItem/TaskItem";

function TaskList() {
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
  
  const { tasks } = useContext(TasksContext) || { tasks: [] };

  return (
    <div 
      style={{ 
        background: theme === 'light' ? '#fff' : '#444', 
        color: theme === 'light' ? '#000' : '#fff', 
        padding: '20px', 
        flex: 1 
      }}
    >
      <h2>Список задач</h2>
      
      {!tasks || tasks.length === 0 ? (
        <p>Задач пока нет. Добавьте первую!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id || task._id} task={task} />
        ))
      )}
    </div>
  );
}

export default TaskList;