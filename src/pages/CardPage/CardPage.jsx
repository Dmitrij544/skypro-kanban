import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react'; 
import TasksContext from '../../TasksContext'; 
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

function CardPage() {
  const { tasks, fetchTasks } = useContext(TasksContext) || { tasks: [] };

  useEffect(() => {
    if (typeof fetchTasks === 'function') {
      fetchTasks();
    }
  }, [fetchTasks]);

  return (
    <>
      <Header />
      <Main cards={tasks} />
      <Outlet />
    </>
  );
}

export default CardPage;