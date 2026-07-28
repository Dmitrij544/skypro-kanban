import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import TasksContext from '../../TasksContext'; 
import PopBrowse from '../../components/PopBrowse/PopBrowse';

function TaskDetailsPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const { tasks, toggleTask, deleteTask } = useContext(TasksContext) || { tasks: [] };

  const currentTask = tasks.find((task) => String(task._id || task.id) === String(id));

  const handleClose = () => {
    navigate('/'); 
  };

  if (!currentTask) {
    return null; 
  }

  return (
    <PopBrowse 
      task={currentTask} 
      onClose={handleClose} 
      onSave={toggleTask} 
      onDelete={deleteTask} 
    />
  );
}

export default TaskDetailsPage;