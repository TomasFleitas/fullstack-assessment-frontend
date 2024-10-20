import style from './index.module.scss';

type AvatarProps = {
  isActive?: boolean;
  photoUrl?: string;
  size: 'big' | 'small';
};

export const Avatar = ({ isActive, size = 'small', photoUrl }: AvatarProps) => {
  return (
    <div className={`${style['employee-avatar']} ${style[size]}`}>
      <img src={photoUrl} title="employee photo" />
      {isActive !== undefined && !isActive && (
        <div className={style['inactive-label']}>Inactivate</div>
      )}
    </div>
  );
};
