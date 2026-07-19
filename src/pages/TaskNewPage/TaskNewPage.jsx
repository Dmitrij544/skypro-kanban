import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TasksContext from '../../TasksContext'; 

function TaskNewPage() {
  const navigate = useNavigate();
  const { addTask } = useContext(TasksContext);
  const [title, setTitle] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask(title); 
    
    navigate('/');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Введите имя задачи..."
      />
      <button type="submit">Создать задачу</button>
    </form>
  );
}

export default TaskNewPage;