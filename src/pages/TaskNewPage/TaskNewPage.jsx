import { useNavigate } from 'react-router-dom';
import PopNewCard from '../../components/PopNewCard/PopNewCard';

function TaskNewPage({ onAddTask }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <PopNewCard 
      onAddTask={onAddTask} 
      onClose={handleClose} 
    />
  );
}

export default TaskNewPage;