import { useState, useContext } from 'react';
import TasksContext from './TasksContext';
import ThemeContext from './ThemeContext';

function AddTaskForm() {
  const { addTask } = useContext(TasksContext) || {};
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const taskObject = {
        title: title.trim(),
        description: "Новая задача создана через интерактивную форму",
        topic: 'Web Design',
        categoryClass: '_orange'
      };

      if (typeof addTask === 'function') {
        addTask(taskObject);
      }
      
      setTitle(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', background: theme === 'light' ? '#f0f0f0' : '#222', color: theme === 'light' ? '#000' : '#fff' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Новая задача"
        style={{ padding: '10px', width: '70%', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Добавить</button>
    </form>
  );
}

export default AddTaskForm;