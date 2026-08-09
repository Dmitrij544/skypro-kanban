import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Sidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <aside style={{ background: theme === 'light' ? '#f0f0f0' : '#222', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <h2>Фильтры</h2>
      <ul>
        <li>Все задачи</li>
        <li>Активные</li>
        <li>Завершённые</li>
      </ul>
    </aside>
  );
}

export default Sidebar;