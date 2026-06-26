import { useParams, useNavigate } from 'react-router-dom';
import PopBrowse from '../../components/PopBrowse/PopBrowse';

function TaskDetailsPage({ cards, onSave, onDelete }) {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const currentTask = cards.find((task) => task.id === Number(id));

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
      onSave={onSave} 
      onDelete={onDelete} 
    />
  );
}

export default TaskDetailsPage;