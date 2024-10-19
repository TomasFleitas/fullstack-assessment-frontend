import { Button, ButtonProps } from 'antd';
import style from './index.module.scss';

const CustomButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={`${style['custom-button']} ${props.className}`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
