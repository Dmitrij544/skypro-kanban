import { useContext } from "react";

import ThemeContext from "../../ThemeContext"; 
import TasksContext from "../../TasksContext"; 

function TaskItem({ task }) {
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
  
  const { toggleTask, deleteTask } = useContext(TasksContext) || {};

  const isCompleted = task.status === 'Готово';

  return (
    <div 
      style={{
        background: theme === 'light' ? '#e0e0e0' : '#555',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '12px',
        margin: '10px 0',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '70%' }}>
        <span 
          style={{ 
            fontWeight: 'bold',
            textDecoration: isCompleted ? 'line-through' : 'none',
            opacity: isCompleted ? 0.6 : 1
          }}
        >
          {task.title}
        </span>
        
        {task.description && (
          <p 
            style={{ 
              margin: 0, 
              fontSize: '14px', 
              color: theme === 'light' ? '#666' : '#ccc',
              textDecoration: isCompleted ? 'line-through' : 'none',
              opacity: isCompleted ? 0.6 : 1
            }}
          >
            {task.description}
          </p>
        )}
      </div>
      
      <div>
        <button 
          onClick={() => toggleTask && toggleTask(task._id || task.id)} 
          style={{ marginRight: '10px', cursor: 'pointer' }}
        >
          {isCompleted ? 'Вернуть' : 'Выполнить'}
        </button>

        <button 
          onClick={() => deleteTask && deleteTask(task._id || task.id)}
          style={{ cursor: 'pointer' }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

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