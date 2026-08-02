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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Main cards={tasks} />
      <Outlet />
    </>
  );
}

export default CardPage;