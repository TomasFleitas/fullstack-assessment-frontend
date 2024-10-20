import { Button } from 'antd';
import { useSession } from 'context/sessionContext';
import style from './index.module.scss';

export const Header = () => {
  const { sessionData, logout } = useSession();
  return (
    <header className={style['header']}>
      <div className={style['welcome-message']}>
        👋 Welcome, {sessionData.user?.name}
      </div>
      <Button type="primary" danger onClick={logout}>
        Logout
      </Button>
    </header>
  );
};
