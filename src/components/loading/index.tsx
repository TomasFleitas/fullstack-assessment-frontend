import style from './index.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

export const Loading = () => {
  return (
    <div className={style.loading}>
      <LoadingOutlined />
    </div>
  );
};
