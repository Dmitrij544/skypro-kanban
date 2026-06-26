import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

function MainPage({ cards, setAuth }) {
  return (
    <>
      <Header setAuth={setAuth} />
      <Main cards={cards} />
      <Outlet />
    </>
  );
}

export default MainPage;